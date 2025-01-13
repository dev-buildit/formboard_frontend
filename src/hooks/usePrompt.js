/**
 * This function displays a prompt modal.
 * 
 * @param {String} msgTitle Prompt title
 * @param {String} msgContent Prompt message
 * @param {"danger" | "primary" | "success" | secondary} btnType1 The right button type. (Usually meant to be the action btn)
 * @param {String} btnText1 The right button text
 * @param {Function} cb1 The callback function that get triggered when you click on the right btn
 * @param {"danger" | "primary" | "success" | secondary} btnType2 The left button type. (Usually meant to be the cancel btn)
 * @param {String} btnText2 The left button text
 * @param {Function} cb2 The callback function that get triggered when you click on the left btn

 */
const usePrompt = (
  msgTitle = "This is an prompt",
  msgContent = "this is the content",
  /**
   * @default "primary"
   */
  btnType1 = "primary",
  /**
   * @default "Okay"
   */
  btnText1 = "Okay",
  cb1 = () => {},
  /**
   * @default "secondary"
   */
  btnType2 = "secondary",
  /**
   * @default "Cancel"
   */
  btnText2 = "Cancel",
  cb2 = () => {}
) => {
  let container = document.createElement("div");

  let promptHTML = `
  <div class="modal fade" id="promptBox" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="promptBox"  aria-modal="true" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="promptBox">${msgTitle}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="upCloseBtn"></button>
      </div>
      <div class="modal-body text-start">
        <p>${msgContent}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-${btnType2}" data-bs-dismiss="modal" id="closeBtn">${btnText2}</button>
        <button type="button" class="btn btn-${btnType1}" data-bs-dismiss="modal" id="funcBtn">${btnText1}</button>
      </div>
    </div>
  </div>
</div>`;
  container.innerHTML = promptHTML;

  let modalContainer = document.querySelector("#modalContainer");
  if (modalContainer) {
    modalContainer.appendChild(container);
    let promptModal = document.querySelector("#promptBox"),
      upCloseBtn = document.querySelector("#upCloseBtn"),
      closeBtn = document.querySelector("#closeBtn"),
      funcBtn = document.querySelector("#funcBtn"),
      launchModalBtn = document.createElement("button");
    launchModalBtn.type = "button";
    launchModalBtn.style.display = "none";
    launchModalBtn.dataset.bsToggle = "modal";
    launchModalBtn.dataset.bsTarget = "#promptBox";
    upCloseBtn.onclick = cb2;
    closeBtn.onclick = cb2;
    funcBtn.onclick = cb1;
    let border = "2px solid black";

    modalContainer.appendChild(launchModalBtn);
    promptModal.addEventListener("hidden.bs.modal", () => {
      container.remove();
      launchModalBtn.remove();
    });

    launchModalBtn.click();
    let currentBtn = funcBtn;
    currentBtn.style.border = border;

    window.onkeydown = (e) => {
      if (e.key === "Enter") {
        currentBtn.style.border = "";
        currentBtn.click();
        window.onkeydown = () => {};
      } else if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        currentBtn.style.border = "";
        currentBtn = currentBtn === funcBtn ? closeBtn : funcBtn;
        currentBtn.style.border = border;
      }
    };
  } else {
    setTimeout(() => {
      usePrompt(
        msgTitle,
        msgContent,
        btnType1,
        btnText1,
        cb1,
        btnType2,
        btnText2,
        cb2
      );
    }, 500);
  }
};

export default usePrompt;
