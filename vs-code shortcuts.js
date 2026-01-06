alt+z => line wrap/unwrap






// ============ vim shortcuts ============

// :w => save file after changes without exiting the file 
// :q => quit the file ( only works if no changes were made, if changes were made it will give error and suggest to use :q!)


// :wq => save the file and quit the file
// :q! => quit the file without saving changes (force quit)

// ----------- yanking  commands -----------

// ---------- in normal mode 
// yy  => copying current line 
// 2yy => copy 2 lines
// p => paste the copied line below the current line
// P => paste the copied line above the current line

//  ggVG to select all lines, then press y to copy all lines


// u => undo the last change


// i => insert mode ( to start editing the file)
// esc => to exit insert mode 
// x => delete a character
// dd => delete a line
// yy => copy a line
// p => paste the copied line 
// u => undo
// ctrl + r => redo
// :set number => show line numbers
// :set nonumber => hide line numbers
// :%s/old/new/g => replace all occurrences of 'old' with 'new' in the file
// :set paste => enable paste mode to avoid auto indentation when pasting code
// :set nopaste => disable paste mode
// /word => search for 'word' in the file
// n => go to next occurrence of the searched word
// N => go to previous occurrence of the searched word          

// Word-wise Navigation 
// These motions treat a "word" as a sequence of letters, digits, and underscores. Punctuation marks are considered separate words. 
// w - Move forward to the beginning of the next word.
// b - Move backward to the beginning of the current or previous word.
// e - Move forward to the end of the current or next word.
// ge - Move backward to the end of the previous word. 

// WORD-wise Navigation
// These capitalized motions treat a "WORD" as a sequence of non-blank characters, so punctuation is included as part of the WORD (e.g., "reallyLongObjectName.longMethod()" is one WORD). 
// W - Move forward to the beginning of the next WORD.
// B - Move backward to the beginning of the current or previous WORD.
// E - Move forward to the end of the current or next WORD.
// gE - Move backward to the end of the previous WORD. 

// Line Endpoints
// 0 (zero) - Move to the very first character of the line (including whitespace).
// ^ - Move to the first non-blank character of the line.
// $ - Move to the end of the line. 

// Jumps to Specific Characters
// For more precise movement within a line, you can jump to specific characters: 
// f {character} - Find and jump on the next occurrence of {character} in the line.
// t {character} - Jump until the character just before the next occurrence of {character} in the line.
// F {character} - Find and jump on the previous occurrence of {character} in the line (backward search).
// T {character} - Jump until the character just after the previous occurrence of {character} in the line (backward search).
// ; - Repeat the last f, t, F, or T command in the same direction.
// , - Repeat the last f, t, F, or T command in the opposite direction. 

// Combining with Counts
// You can prefix most motions with a number to repeat the action that many times. For example: 
// 3w moves three words forward.
// 2e moves to the end of the second word from the current cursor position.
// 4fb jumps to the fourth 'b' character on the line. 
// These commands are a core part of efficient navigation in Vim. A great way to learn them is by running the built-in interactive tutorial by typing :vimtutor. 

//--------------------- Basic Line Navigation (Normal Mode)
// Command 	Description
//     j	Move the cursor down one line.
//     k	Move the cursor up one line.
//     0 (zero)	Move the cursor to the beginning of the current line (including whitespace).
//     ^	Move the cursor to the first non-blank character of the current line.
//     $	Move the cursor to the end of the current line.
//     gg	Move to the first line of the file (beginning of the file).
//     G	Move to the last line of the file (end of the file).

// Advanced Line Navigation
// Move Multiple Lines: Prefix the j or k command with a number to move that many lines. For example, 10j moves down 10 lines, and 5k moves up 5 lines.
// Go to a Specific Line: Type a line number followed by G to jump directly to that line. For instance, 42G moves the cursor to line 42. Alternatively, you can use the command mode: :42 followed by Enter.

// Scrolling:
// Ctrl + f scrolls forward (down) a full page.
// Ctrl + b scrolls backward (up) a full page.
// Ctrl + d scrolls down a half page.
// Ctrl + u scrolls up a half page.

// Navigation History: Vim keeps a jump list of cursor positions. Use Ctrl + o to jump back to your previous position and Ctrl + i to jump forward.
// Screen Position Jumps:
// H (High) moves the cursor to the top line of the visible screen.
// M (Middle) moves the cursor to the middle line of the visible screen.
// L (Low) moves the cursor to the bottom line of the visible screen.
// Wrapped Lines: When a single "physical" line of text is wrapped across multiple "screen" lines, the standard j and k commands move by physical lines. To navigate by the displayed screen lines, use gj (down) and gk (up). 

// -------------To delete lines in the Vim editor, you primarily use Normal mode commands, most commonly the dd command. 
// Before using any of the commands below, ensure you are in Normal mode by pressing the Esc key. 
// Deleting Single or Multiple Lines
// Action 	Command (in Normal mode)
// Delete the current line	dd
// Delete the current line and the next n lines (e.g., next 4 lines)	5dd (replace 5 with your desired number)
// Delete from the cursor to the end of the line	D or d$
// Delete from the beginning of the line to the cursor	d0
// Deleting Lines Using Line Numbers (Ex Mode)
// You can enter Ex mode by pressing : in Normal mode. This allows you to specify a range of lines. 
// Action 	Command (in Ex mode)
// Delete a specific line (e.g., line 5)	:5d
// Delete a range of lines (e.g., lines 10 to 20)	:10,20d
// Delete from the current line to the end of the file	:.,$d
// Delete all lines in the file	:%d or :1,$d
// Deleting Lines with Patterns
// Vim also allows you to delete lines based on search patterns using the global command (:g) in Ex mode. 
// Delete all lines containing a specific pattern:
// :g/pattern/d (e.g., :g/error/d deletes all lines with the word "error")
// Delete all lines not containing a specific pattern:
// :v/pattern/d or :g!/pattern/d
// Delete all blank lines:
// :g/^$/d
// Delete all blank lines (including those with whitespace):
// :g/^\s*$/d 
// Other Useful Tips
// Undo a deletion: Press u in Normal mode immediately after the deletion.
// Redo a deletion/change: Press Ctrl + r in Normal mode.
// Deleted lines are "cut" and can be pasted using p (paste after the cursor) or P (paste before the cursor) in Normal mode. 

// Copying and Pasting Within Vim
// This method is ideal for moving text between different locations in the same file or across files open in the same Vim session (using :e <filename> or split windows). 
// Enter Normal Mode: Press Esc to ensure you are in normal mode.
// Move your cursor to the starting position of the text you want to copy.
// Yank (Copy) Text:
// A single line: Type yy (yank current line).
// Multiple lines: Type a number followed by yy, e.g., 3yy to copy three lines.
// Selected text (Visual Mode): Press v to enter visual mode, use arrow keys to highlight the text, and then press y to yank it.
// Entire file: Type ggVG to select all lines, then press y.
// Move your cursor to the desired paste location.
// Put (Paste) Text:
// After the cursor/current line: Press p.
// Before the cursor/current line: Press P. 
// Copying to and from the System Clipboard
// To copy text from Vim and paste it into an external application (like a web browser or another text editor), you must use the system clipboard register, which is usually + (or * on some X11 systems). Note: Your Vim installation must be compiled with clipboard support (check with vim --version | grep "+clipboard"). 
// From Vim to the system clipboard:
// A single line: In normal mode, place the cursor on the line and type "+yy.
// Selected text: In visual mode (press v or V first), highlight the text, then type "+y.
// Entire file: In normal mode, type :%y+ or gg"+yG. 
// From the system clipboard into Vim:
// In Normal Mode: Move to the desired location and press "+p (paste after cursor) or "+P (paste before).
// In Insert Mode: Press Ctrl + r then + to insert the clipboard contents directly.
// Using Terminal Shortcuts: If the above methods don't work, you can often use terminal-specific shortcuts. Enter insert mode (i), then use Shift + Insert or Ctrl + Shift + V (depending on your terminal emulator) to paste from the system clipboard. Use :set paste before pasting to prevent auto-indentation issues. 




//  ===========  Terminator shortcuts ============

// Ctrl + Shift + T => Open a new tab
// Ctrl + Shift + O => Split the current terminal horizontally:
// Ctrl + Shift + E => Split the current terminal vertically: 
// Ctrl + Shift + W => Close the current terminal/window (closes the focused terminal pane) 
// Ctrl + Shift + Q => Quit the entire Terminator window. 


