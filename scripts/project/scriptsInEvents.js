


const scriptsInEvents = {

	async Inappfeedback_es_Event1_Act1(runtime, localVars)
	{
		window.onmessage = function(event) {
			runtime.globalVars.FeedbackAction = event.data;
		}
	},

	async Inappfeedback_es_Event2_Act2(runtime, localVars)
	{
		alert("Feedback!");
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

