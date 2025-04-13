

const scriptsInEvents = {

	async FolhaDeEventos1_Event5_Act3(runtime, localVars)
	{
		
		//obter valor da variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		// reduzir uma vida
		
		vidas --;
		
		// atualiza a variavel global do construct 3
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegarem a 0, va para game over
		
		if(vidas <= 0){
			console.log("Gamer Over");
			runtime.goToLayout("Gamer over")
		}
	},

	async FolhaDeEventosFase2_Event6_Act3(runtime, localVars)
	{
		
		//obter valor da variavel global vidas
		let vidas = runtime.globalVars.vidas;
		
		// reduzir uma vida
		
		vidas --;
		
		// atualiza a variavel global do construct 3
		runtime.globalVars.vidas = vidas;
		
		//se vidas chegarem a 0, va para game over
		
		if(vidas <= 0){
			console.log("Gamer Over");
			runtime.goToLayout("Gamer over")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
