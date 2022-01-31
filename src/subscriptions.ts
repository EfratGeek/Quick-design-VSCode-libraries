import * as vscode from 'vscode';

export function pushGood() {

    return vscode.commands.registerCommand('efratfirstextension.helloWorld', () => {
        vscode.window.showInformationMessage("efratfirstextension good");
    });

}

export function pushName() {
    return vscode.commands.registerCommand('something.h', async () => {

        //await -לא ממשיך את ההרצה עד שמקבל קלט מהמשתמש
        const an = await vscode.window.showInformationMessage("efratfirstextension good?", "yes", "no");
        console.log(an);
        
        if (an === 'yes') {
            let s;
            const an2 = await vscode.window.showInformationMessage("thank you' we are sure that you will enjoy!", "ok");
            if (an2 === 'ok') {
                const s = await vscode.window.showInputBox({ placeHolder: 'write your first name' });
                vscode.window.showInformationMessage(`name: ${s}`);
                console.log(`name: ${s}`);
            }
        } else {
            vscode.window.showInformationMessage("opss good buy.");
        }
    });
    

    
}


