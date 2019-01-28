// very good answer here:
// https://stackoverflow.com/questions/9515704/insert-code-into-the-page-context-using-a-content-script
function dispatch(message: any): Promise<any> {
  let resolve: any;
  let reject: any;
  chrome.runtime.sendMessage(message, function(response) {
    if (!response) reject();

    if (response.error) {
      reject(response.payload);
    } else {
      resolve(response.payload);
    }
  });

  return new Promise((rsv, rjt) => {
    resolve = rsv;
    reject = rjt;
  });
}

function inject(url: string) {
  return dispatch({
    type: "REQUEST",
    payload: { url }
  })
    .then(res => {
      const code = res.data;
      return code;
    })
    .catch(err => {
      console.error(`[Injector Error] Fail to GET ${url}`, err);
      return false;
    });
}

function main() {
  inject(
    "file:///path/to/injecting/target"
  ).then(code => {
    if (code) {
      var scriptTag = document.createElement("script");
      scriptTag.textContent = code;
      (document.head || document.documentElement).prepend(scriptTag);
    }
  });
}

main();
