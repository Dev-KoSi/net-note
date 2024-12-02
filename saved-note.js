import{myNotes, removeFromStorage} from "./myNotes.js";

function noteSummary(){
  let savedHTML = '';

  myNotes.forEach((note)=>{
    let {noteName, notes, generateId, date, time} = note

    let added = `
      <div class="all-saved-notes">
        <div class="folder">
          <div class="name-date">
            <div class="the-name">${noteName}</div>
            <div class="spacer"></div>
            <div class="date-time">
              <div class="the-date">${date}</div>
              <div class="the-time">${time}</div>
            </div>
          </div>
      
          <div class="saved-note">
            ${notes}
          </div>
          <div class="del-div">
            <div class="spacer"></div>
            <button class="del" data-index-id="${generateId}">Delete</button>
          </div>
        </div>
      </div>
    `;
    savedHTML += added;
  });

  document.querySelector('.all-saved').innerHTML = savedHTML;



  document.querySelectorAll('.del').forEach((del)=>{
    del.addEventListener('click', ()=>{
      let indexId = del.dataset.indexId;

      removeFromStorage(indexId);
      noteSummary();
    });
  });
};

noteSummary();