//import { waitForDebugger } from 'inspector';
import * as vscode from 'vscode';
import { provider,provider3 ,provider4 ,provider5, provider7} from './provider';
import { pushGood, pushName } from './subscriptions';
import { provider1,provider2 } from './copy';

import { class_c,bootstrap_c } from './completion_class';



export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "efratfirstextension" is now active!');

	const a= require('C:\Users\212796643\Desktop\Quick-design-VSCode-libraries\src\read.json');
	

    const _pushGood=pushGood();
	const _pushName=pushName();
	//const _complet=provider();
	// const _prov1=provider1();
	// const _prov2=provider2();
	// const _prov3=provider3();
	// const _prov4=provider4();
	// const _prov5=provider5();
	// provider();
	// provider1();
	// provider2();
	// provider3();
	// provider4();
	// provider5();
	
	
	class_c();
	var list1=['a','b','c','d','e'];
	list1.forEach(element => {
	bootstrap_c(element);
	});

	

	//context.subscriptions.push(
	// 	//_complet,
	// 	// _pushGood,
	// 	// _pushName,
	// 	// _prov1,
	// 	// _prov2,
	// 	// _prov3
	//);

}

// this method is called when your extension is deactivated
export function deactivate() { }
