function track(container, action) {
    const actions = "keyup keydown mouseup mousedown";
    var arrayActions = actions.split(" ");
    arrayActions.forEach(function (value) {
        container.addEventListener(value, action);
    });
}
function initEditor(container) {
    if (container.tagName !== "DIV") {
        error("Container must be div");
        return;
    }
    if (container.hasAttribute("style")) {
        warn("inline CSS. Please consider moving to a <style> element or CSS file.", "BadPractice");
    }
    container.classList.add("js_wysiwyg");
    if (container.innerHTML != "") {
        warn("Do not fill the DIV at first. Clearing contents.", "BadPractice");
    }
    container.innerHTML = "";
    const Toolbar = document.createElement("div");
    Toolbar.classList.add("toolbar");
    let B = createToolbarButton(Toolbar, "B", "Bold");
	B.addEventListener('click', function() {
		document.execCommand('bold');
	});
	attachDocumentEventHandler(function() {
		if (document.queryCommandState('bold')) {
			B.classList.add('bold');
		} else {
			B.classList.remove('bold');
		}
	});
	Toolbar.appendChild(B);
    let I = createToolbarButton(Toolbar, "I", "Italic");
	I.addEventListener('click', function() {
		document.execCommand('italic');
	});
	attachDocumentEventHandler(function() {
		if (document.queryCommandState('italic')) {
			I.classList.add('italic');
		} else {
			I.classList.remove('italic');
		}
	});
	Toolbar.appendChild(I);
    container.appendChild(Toolbar);
    const Area = document.createElement("div");
    Area.classList.add("editing-area");
    Area.setAttribute("contenteditable", "true");
    container.appendChild(Area);
}
function attachDocumentEventHandler(handler) {
	const actions = 'keyup keydown mouseup mousedown';
	actions.split(" ").forEach(function(value) {
		document.addEventListener(value, handler);
	});
}
function createToolbarButton(toolbar, icon, title) {
    let Button = document.createElement("button");
    Button.classList.add("toolbar-button");
    Button.innerHTML = icon;
    Button.title = title;
    return Button;
}
function error(text) {
    console.error("[WYSIWYG-JS] Error: " + text);
    return 0;
}
function debug(name) {
    console.log("[WYSIWYG-JS] Debug: " + name);
}
function warn(name, warnType) {
    switch (warnType) {
        case "Deprecation":
            console.warn("[WYSIWYG-JS] Warning: " + name + " is deprecated.");
            break;
        case "BadPractice":
            console.warn("[WYSIWYG-JS] Warning: Bad practice: " + name);
            break;
        default:
            error("[WYSIWYG-JS-INTERNAL] Invalid argument 'warnType'.");
            break;
    }
}
