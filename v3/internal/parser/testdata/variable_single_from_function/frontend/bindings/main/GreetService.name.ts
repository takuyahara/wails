// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// Greet someone
export async function Greet(name: string) : Promise<string> {
	return wails.CallByName("main.GreetService.Greet", name);
}

