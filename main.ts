import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!


export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
        // 在 Obsidian 加载插件时执行的代码
        // 监听文件列表区域的鼠标按下事件
		console.log('1');
        document.querySelector('.file-explorer').addEventListener('mousedown', this.handleMouseDown.bind(this));
		console.log('2');
    }

    handleMouseDown(event) {
		console.log('3', event);
        if (event.target.tagName === 'IMG') {
			console.log('4', event);
            // 如果点击的是图片
            event.dataTransfer.setData('text/plain', event.target.src);
            event.dataTransfer.setData('DownloadURL', `image/${event.target.src}`);
        }
    }

	onunload() {

	}


}

class SampleModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}


