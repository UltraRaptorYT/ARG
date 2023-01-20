gdjs.WinCode = {};
gdjs.WinCode.GDEnemyHealthObjects1= [];
gdjs.WinCode.GDEnemyHealthObjects2= [];
gdjs.WinCode.GDblue_95laserObjects1= [];
gdjs.WinCode.GDblue_95laserObjects2= [];
gdjs.WinCode.GDgreen_95laserObjects1= [];
gdjs.WinCode.GDgreen_95laserObjects2= [];
gdjs.WinCode.GDblue_95ballObjects1= [];
gdjs.WinCode.GDblue_95ballObjects2= [];
gdjs.WinCode.GDAimObjects1= [];
gdjs.WinCode.GDAimObjects2= [];
gdjs.WinCode.GDLivesObjects1= [];
gdjs.WinCode.GDLivesObjects2= [];
gdjs.WinCode.GDLives2Objects1= [];
gdjs.WinCode.GDLives2Objects2= [];
gdjs.WinCode.GDLives3Objects1= [];
gdjs.WinCode.GDLives3Objects2= [];
gdjs.WinCode.GDHearthObjects1= [];
gdjs.WinCode.GDHearthObjects2= [];
gdjs.WinCode.GDHearth2Objects1= [];
gdjs.WinCode.GDHearth2Objects2= [];
gdjs.WinCode.GDHearth3Objects1= [];
gdjs.WinCode.GDHearth3Objects2= [];
gdjs.WinCode.GDKeycardObtainedObjects1= [];
gdjs.WinCode.GDKeycardObtainedObjects2= [];
gdjs.WinCode.GDdoor2Objects1= [];
gdjs.WinCode.GDdoor2Objects2= [];
gdjs.WinCode.GDDoorBarrierObjects1= [];
gdjs.WinCode.GDDoorBarrierObjects2= [];
gdjs.WinCode.GDPlayerObjects1= [];
gdjs.WinCode.GDPlayerObjects2= [];
gdjs.WinCode.GDWinObjects1= [];
gdjs.WinCode.GDWinObjects2= [];
gdjs.WinCode.GDThankyouObjects1= [];
gdjs.WinCode.GDThankyouObjects2= [];
gdjs.WinCode.GDlinkObjects1= [];
gdjs.WinCode.GDlinkObjects2= [];
gdjs.WinCode.GDplayAgainObjects1= [];
gdjs.WinCode.GDplayAgainObjects2= [];
gdjs.WinCode.GDNewTiledSpriteObjects1= [];
gdjs.WinCode.GDNewTiledSpriteObjects2= [];
gdjs.WinCode.GDNPCObjects1= [];
gdjs.WinCode.GDNPCObjects2= [];
gdjs.WinCode.GDQRObjects1= [];
gdjs.WinCode.GDQRObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};
gdjs.WinCode.conditionTrue_1 = {val:false};
gdjs.WinCode.condition0IsTrue_1 = {val:false};
gdjs.WinCode.condition1IsTrue_1 = {val:false};
gdjs.WinCode.condition2IsTrue_1 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.WinCode.GDNewTiledSpriteObjects1});
gdjs.WinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.WinCode.GDNewTiledSpriteObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition0IsTrue_0;
gdjs.WinCode.condition0IsTrue_1.val = false;
gdjs.WinCode.condition1IsTrue_1.val = false;
{
gdjs.WinCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDNewTiledSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_1.val ) {
{
gdjs.WinCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.WinCode.conditionTrue_1.val = true && gdjs.WinCode.condition0IsTrue_1.val && gdjs.WinCode.condition1IsTrue_1.val;
}
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage 1", false);
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDEnemyHealthObjects1.length = 0;
gdjs.WinCode.GDEnemyHealthObjects2.length = 0;
gdjs.WinCode.GDblue_95laserObjects1.length = 0;
gdjs.WinCode.GDblue_95laserObjects2.length = 0;
gdjs.WinCode.GDgreen_95laserObjects1.length = 0;
gdjs.WinCode.GDgreen_95laserObjects2.length = 0;
gdjs.WinCode.GDblue_95ballObjects1.length = 0;
gdjs.WinCode.GDblue_95ballObjects2.length = 0;
gdjs.WinCode.GDAimObjects1.length = 0;
gdjs.WinCode.GDAimObjects2.length = 0;
gdjs.WinCode.GDLivesObjects1.length = 0;
gdjs.WinCode.GDLivesObjects2.length = 0;
gdjs.WinCode.GDLives2Objects1.length = 0;
gdjs.WinCode.GDLives2Objects2.length = 0;
gdjs.WinCode.GDLives3Objects1.length = 0;
gdjs.WinCode.GDLives3Objects2.length = 0;
gdjs.WinCode.GDHearthObjects1.length = 0;
gdjs.WinCode.GDHearthObjects2.length = 0;
gdjs.WinCode.GDHearth2Objects1.length = 0;
gdjs.WinCode.GDHearth2Objects2.length = 0;
gdjs.WinCode.GDHearth3Objects1.length = 0;
gdjs.WinCode.GDHearth3Objects2.length = 0;
gdjs.WinCode.GDKeycardObtainedObjects1.length = 0;
gdjs.WinCode.GDKeycardObtainedObjects2.length = 0;
gdjs.WinCode.GDdoor2Objects1.length = 0;
gdjs.WinCode.GDdoor2Objects2.length = 0;
gdjs.WinCode.GDDoorBarrierObjects1.length = 0;
gdjs.WinCode.GDDoorBarrierObjects2.length = 0;
gdjs.WinCode.GDPlayerObjects1.length = 0;
gdjs.WinCode.GDPlayerObjects2.length = 0;
gdjs.WinCode.GDWinObjects1.length = 0;
gdjs.WinCode.GDWinObjects2.length = 0;
gdjs.WinCode.GDThankyouObjects1.length = 0;
gdjs.WinCode.GDThankyouObjects2.length = 0;
gdjs.WinCode.GDlinkObjects1.length = 0;
gdjs.WinCode.GDlinkObjects2.length = 0;
gdjs.WinCode.GDplayAgainObjects1.length = 0;
gdjs.WinCode.GDplayAgainObjects2.length = 0;
gdjs.WinCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.WinCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.WinCode.GDNPCObjects1.length = 0;
gdjs.WinCode.GDNPCObjects2.length = 0;
gdjs.WinCode.GDQRObjects1.length = 0;
gdjs.WinCode.GDQRObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);

return;

}

gdjs['WinCode'] = gdjs.WinCode;
