// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT


/** 
 * @function Greet
 * @param name {string}
 * @returns {Promise<string>}
 **/
export async function Greet(name) {
	return wails.CallByName("main.GreetService.Greet", ...Array.prototype.slice.call(arguments, 0));
}
