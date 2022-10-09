#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![test])
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
}

#[tauri::command]
fn test(name: &str)-> String {
  format!("Welcome to gitCREATIVE, {}, you're version tracking helper", name)
}