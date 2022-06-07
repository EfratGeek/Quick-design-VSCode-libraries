//import { waitForDebugger } from 'inspector';
import * as vscode from 'vscode';
import { provider, provider3, provider4, provider5, provider7 } from './provider';
import { pushGood, pushName } from './subscriptions';
import { provider1, provider2 } from './copy';

import { class_c, bootstrap_c, bootstrap_a } from './completion_class';
import CompletionClass from './class/CompletionClass';
import { type } from 'os';

import { isTag } from './completion'; 

//check params
// function _Params(...lists: any[]){
// 	for (let index = 0; index < lists.length; index++) {
// 		lists[index].forEach(elem =>{
// 			console.log(elem);
// 		});
// 	}
// }

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "efratfirstextension" is now active!');
	//check params
	let l1 = [1,2,3,4];
	let l2 = [3,1,2,4];
	let l3 = [2,4,3,1];
	// _Params(l1,l2,l3);
	//stop
	// CompletionClass.getListTags().forEach(elem => console.log(elem));
	// console.log(CompletionClass.getListOfTag('div'));
	// console.log(CompletionClass.getListOfTag('div'));
	// let x = CompletionClass.getListOfTag('button');
	// x.forEach(elem => console.log(elem));
	// console.log(CompletionClass.findBigStyle(CompletionClass.getDictBootString()));
	// console.log(CompletionClass.findBigStyle(CompletionClass.getDictBootString()));
	// console.log(CompletionClass.getListOfBoot("accordion-collapse"));



	// for (let key in x){
	// 	for (let i in x[key]){
	// 		console.log(x[key][i]);
	// 	}
	// }

		// x.div?.forEach(el =>console.log(el ));
	// console.log(x);

	// CompletionClass.getListTags().forEach(elem =>{
	// 	isTag(elem, CompletionClass.getListOfTag(elem));
	// });

	class_c();
	// var list1 = ['r', 'b', 'c', 'd', 'e'];
	// list1.forEach(element => {
	// 	bootstrap_c(element);
	// 	// bootstrap_a(element);
	// });
	
	// let y = CompletionClass.getBootStyle(2);
	// bootstrap_c(String(y));
	let _list = CompletionClass.getListByNumber(CompletionClass.getListOfTag('form'));
	let _list2 = CompletionClass.getListByNumber(CompletionClass.getListOfBoot("accordion-collapse"));
	for (let key in _list){
		// bootstrap_c(_list[key]);
		bootstrap_c(String(_list2[key]));
		console.log(_list2[key]);
	}

	
	// const _pushGood= 
	pushGood();
	// const _pushName=
	pushName();
	// const _complet=provider();
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
