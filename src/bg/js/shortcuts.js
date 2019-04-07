chrome.commands.onCommand.addListener(function(command) {
	if (command == 'enabled') {
		enable();
	}
});
async function enable() {
    let options = await optionsLoad();
    options.enabled = !options.enabled;
    let newOptions = await odhback.opt_optionsChanged(options);
    optionsSave(newOptions);
}