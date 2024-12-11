// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-blue; icon-glyph: magic;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: magic;
let password = "2012"; 

let input = await promptPassword();

if (input === password) {
  let options = ["FPS 120", "TRICK DPI 120", "RECOIL", "AIM HEAD 75%"];
  let selectedOption = await showMenu(options);
  
  if (selectedOption !== -1) {
    let option = options[selectedOption];
    let alert = new Alert();
    alert.message = `ACTIVANDO ${option}`;
    alert.addAction("OK");
    await alert.present();

    
    let fileURL = await DocumentPicker.open();
    if (fileURL) {
      let alert = new Alert();
      alert.message = `BIEN: ${fileURL}`;
      alert.addAction("OK");
      await alert.present();
    }
    
    let urls = ["Free Fire", "Free Fire Max"];
    let selectedURL = await showMenu(urls);
    
    if (selectedURL === 0) {
      Safari.open("freefire://");
    } else if (selectedURL === 1) {
      Safari.open("freefiremax://");
    }
  }
} else {
  let alert = new Alert();
  alert.message = "Saliendo!";
  alert.addAction("OK");
  await alert.present();
}

function promptPassword() {
  let alert = new Alert();
  alert.title = "Sigueme en YT/TK/IG";
  alert.message = "Deep4Real05";
  alert.addTextField("Spy Aimlock");
  alert.addAction("⚙️ACTIVE⚙️");
  return alert.present().then(result => alert.textFieldValue(0));
}

function showMenu(options) {
  let alert = new Alert();
  alert.title = "BETA";
  for (let option of options) {
    alert.addAction(option);
  }
  return alert.presentSheet().then(result => result);
}