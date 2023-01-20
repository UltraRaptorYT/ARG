gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDEnemyHealthObjects1= [];
gdjs.Game_32OverCode.GDEnemyHealthObjects2= [];
gdjs.Game_32OverCode.GDblue_95laserObjects1= [];
gdjs.Game_32OverCode.GDblue_95laserObjects2= [];
gdjs.Game_32OverCode.GDgreen_95laserObjects1= [];
gdjs.Game_32OverCode.GDgreen_95laserObjects2= [];
gdjs.Game_32OverCode.GDblue_95ballObjects1= [];
gdjs.Game_32OverCode.GDblue_95ballObjects2= [];
gdjs.Game_32OverCode.GDAimObjects1= [];
gdjs.Game_32OverCode.GDAimObjects2= [];
gdjs.Game_32OverCode.GDLivesObjects1= [];
gdjs.Game_32OverCode.GDLivesObjects2= [];
gdjs.Game_32OverCode.GDLives2Objects1= [];
gdjs.Game_32OverCode.GDLives2Objects2= [];
gdjs.Game_32OverCode.GDLives3Objects1= [];
gdjs.Game_32OverCode.GDLives3Objects2= [];
gdjs.Game_32OverCode.GDHearthObjects1= [];
gdjs.Game_32OverCode.GDHearthObjects2= [];
gdjs.Game_32OverCode.GDHearth2Objects1= [];
gdjs.Game_32OverCode.GDHearth2Objects2= [];
gdjs.Game_32OverCode.GDHearth3Objects1= [];
gdjs.Game_32OverCode.GDHearth3Objects2= [];
gdjs.Game_32OverCode.GDKeycardObtainedObjects1= [];
gdjs.Game_32OverCode.GDKeycardObtainedObjects2= [];
gdjs.Game_32OverCode.GDdoor2Objects1= [];
gdjs.Game_32OverCode.GDdoor2Objects2= [];
gdjs.Game_32OverCode.GDDoorBarrierObjects1= [];
gdjs.Game_32OverCode.GDDoorBarrierObjects2= [];
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDNewBBTextObjects1= [];
gdjs.Game_32OverCode.GDNewBBTextObjects2= [];
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewBBText2Objects1= [];
gdjs.Game_32OverCode.GDNewBBText2Objects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.Game_32OverCode.GDNewTiledSpriteObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.Game_32OverCode.GDNewTiledSpriteObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.condition0IsTrue_1.val = false;
gdjs.Game_32OverCode.condition1IsTrue_1.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDNewTiledSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_1.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.Game_32OverCode.conditionTrue_1.val = true && gdjs.Game_32OverCode.condition0IsTrue_1.val && gdjs.Game_32OverCode.condition1IsTrue_1.val;
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage 1", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDEnemyHealthObjects1.length = 0;
gdjs.Game_32OverCode.GDEnemyHealthObjects2.length = 0;
gdjs.Game_32OverCode.GDblue_95laserObjects1.length = 0;
gdjs.Game_32OverCode.GDblue_95laserObjects2.length = 0;
gdjs.Game_32OverCode.GDgreen_95laserObjects1.length = 0;
gdjs.Game_32OverCode.GDgreen_95laserObjects2.length = 0;
gdjs.Game_32OverCode.GDblue_95ballObjects1.length = 0;
gdjs.Game_32OverCode.GDblue_95ballObjects2.length = 0;
gdjs.Game_32OverCode.GDAimObjects1.length = 0;
gdjs.Game_32OverCode.GDAimObjects2.length = 0;
gdjs.Game_32OverCode.GDLivesObjects1.length = 0;
gdjs.Game_32OverCode.GDLivesObjects2.length = 0;
gdjs.Game_32OverCode.GDLives2Objects1.length = 0;
gdjs.Game_32OverCode.GDLives2Objects2.length = 0;
gdjs.Game_32OverCode.GDLives3Objects1.length = 0;
gdjs.Game_32OverCode.GDLives3Objects2.length = 0;
gdjs.Game_32OverCode.GDHearthObjects1.length = 0;
gdjs.Game_32OverCode.GDHearthObjects2.length = 0;
gdjs.Game_32OverCode.GDHearth2Objects1.length = 0;
gdjs.Game_32OverCode.GDHearth2Objects2.length = 0;
gdjs.Game_32OverCode.GDHearth3Objects1.length = 0;
gdjs.Game_32OverCode.GDHearth3Objects2.length = 0;
gdjs.Game_32OverCode.GDKeycardObtainedObjects1.length = 0;
gdjs.Game_32OverCode.GDKeycardObtainedObjects2.length = 0;
gdjs.Game_32OverCode.GDdoor2Objects1.length = 0;
gdjs.Game_32OverCode.GDdoor2Objects2.length = 0;
gdjs.Game_32OverCode.GDDoorBarrierObjects1.length = 0;
gdjs.Game_32OverCode.GDDoorBarrierObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDNewBBTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewBBTextObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewBBText2Objects1.length = 0;
gdjs.Game_32OverCode.GDNewBBText2Objects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
