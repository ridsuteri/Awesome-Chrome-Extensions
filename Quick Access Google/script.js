window.onload = () => {
    chrome.management.getAll((apps) => {
        for (let i = 0; i < apps.length; i++) {
            let app = apps[i];
            if (!app.isApp) continue;
            if (!app.enabled) continue;

            let largestIcon = { size: 0, url: null };
            for (let j = 0; j < app.icons.length; j++) {
                let icon = app.icons[j];
                if (icon.size < largestIcon.size) continue;
                largestIcon = icon;
            }

            let img = document.createElement("img");
            img.src = largestIcon.url;
            img.width = 64;
            document.body.appendChild(img);

            let button = document.createElement("input");
            button.type = "button";
            button.value = app.name;
            button.onclick = () => {
                chrome.management.launchApp(app.id);
            };
            document.body.appendChild(button);

            let br = document.createElement("br");
            document.body.appendChild(br);

        }
    });
}