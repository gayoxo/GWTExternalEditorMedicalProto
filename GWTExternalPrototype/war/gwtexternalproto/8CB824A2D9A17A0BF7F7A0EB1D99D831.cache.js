var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.gwtexternalproto;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '8CB824A2D9A17A0BF7F7A0EB1D99D831';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1}, $intern_3 = {3:1, 7:1}, $intern_4 = {3:1, 13:1, 7:1}, $intern_5 = {3:1, 350:1}, $intern_6 = 65535, $intern_7 = {8:1, 9:1, 3:1, 6:1, 4:1}, $intern_8 = {9:1, 41:1, 3:1, 6:1, 4:1}, $intern_9 = {9:1, 42:1, 3:1, 6:1, 4:1}, $intern_10 = {9:1, 43:1, 3:1, 6:1, 4:1}, $intern_11 = {19:1, 3:1, 6:1, 4:1}, $intern_12 = {9:1, 68:1, 3:1, 6:1, 4:1}, $intern_13 = {65:1, 3:1, 13:1, 7:1}, $intern_14 = 4194303, $intern_15 = 1048575, $intern_16 = 524288, $intern_17 = 4194304, $intern_18 = 17592186044416, $intern_19 = -9223372036854775808, $intern_20 = {3:1, 127:1}, $intern_21 = 65536, $intern_22 = 16777216, $intern_23 = 33554432, $intern_24 = 67108864, $intern_25 = {26:1, 21:1, 23:1, 22:1, 27:1, 18:1, 16:1}, $intern_26 = {26:1, 21:1, 23:1, 22:1, 27:1, 73:1, 18:1, 16:1}, $intern_27 = {26:1, 21:1, 23:1, 22:1, 27:1, 77:1, 18:1, 16:1}, $intern_28 = {72:1}, $intern_29 = {10:1}, $intern_30 = {3:1, 11:1, 89:1}, $intern_31 = {81:1, 34:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function $toString(this$static){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this$static)) + '@' + (hashCode__I__devirtual$(this$static) >>> 0).toString(16);
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_0(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $toString(this);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 390:1, 6:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_1()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_1()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(106, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_1 = function isArray_1(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_17(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 106);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.this$01.animation = null;
  $layout(this$static.this$01, 0, null);
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    $onUpdate(this$static, (1 + Math.cos($intern_1)) / 2);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.this$01.animation = null;
    $layout(this$static.this$01, 0, null);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(119, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 119);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(203, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 203);
defineClass(382, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 382);
defineClass(98, 1, {98:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 98);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(344, 382, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 344);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(345, 98, {98:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 345);
function $cancelAnimationFrame(this$static, requestId){
  $remove_8(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {401:1, 3:1}, 105, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 401);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_8(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(346, 382, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_4(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 346);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_0(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(347, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  $updateAnimations(this.this$01);
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 347);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
}

defineClass(348, 347, {}, AnimationSchedulerImplTimer$1);
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 348);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(105, 98, {98:1, 105:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 105);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(5, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 5);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(267, 5, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 267);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(266, 5, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 266);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(268, 5, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 268);
function $getAriaValue(this$static, value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_0($append_0(buf, this$static.getSingleValue(item_0)), ' ');
  }
  return $trim(buf.string);
}

function $remove(this$static, element){
  $removeAttribute(element, this$static.name_0);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(this$static, values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(125, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 125);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(71, 125, {}, AriaValueAttribute);
_.getSingleValue = function getSingleValue(value_0){
  return $getAriaValue_0(dynamicCast(value_0, 400));
}
;
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 71);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(269, 5, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 269);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(270, 5, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 270);
function $removeAriaPressedState(element){
  $remove(($clinit_State() , PRESSED), element);
}

function $setAriaPressedState(element, value_0){
  $set_0(($clinit_State() , PRESSED), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_2, 60, 0, [value_0]));
}

function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(271, 5, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 271);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(272, 5, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 272);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(273, 5, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 273);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(274, 5, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 274);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(275, 5, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 275);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(276, 5, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 276);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(277, 5, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 277);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(278, 5, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 278);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(279, 5, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 279);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(280, 5, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 280);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(281, 5, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 281);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(283, 5, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 283);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(282, 5, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 282);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(284, 5, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 284);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(285, 5, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 285);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(286, 5, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 286);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(287, 5, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 287);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(290, 5, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 290);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(288, 5, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 288);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(289, 5, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 289);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(291, 5, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 291);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(292, 5, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 292);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(293, 5, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 293);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(294, 5, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 294);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(299, 5, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 299);
function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(295, 5, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 295);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(298, 5, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 298);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(296, 5, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 296);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(297, 5, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 297);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(300, 5, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 300);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(301, 5, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 301);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(302, 5, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 302);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(303, 5, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 303);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.name_0 != null?value_0.name_0:'' + value_0.ordinal)] = value_0;
  }
  return result;
}

function valueOf(map_0, name_0){
  var result;
  checkNotNull(name_0);
  result = map_0[':' + name_0];
  checkCriticalArgument(!!result, initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [name_0]));
  return result;
}

defineClass(4, 1, {3:1, 6:1, 4:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_PressedValue(){
  $clinit_PressedValue = emptyMethod;
  TRUE = new PressedValue('TRUE', 0);
  FALSE = new PressedValue('FALSE', 1);
  MIXED = new PressedValue('MIXED', 2);
  UNDEFINED = new PressedValue('UNDEFINED', 3);
}

function $getAriaValue_0(this$static){
  switch (this$static.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'mixed';
    case 3:
      return 'undefined';
  }
  return null;
}

function PressedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_PressedValue();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_2, 60, 0, [TRUE, FALSE, MIXED, UNDEFINED]);
}

defineClass(60, 4, {400:1, 60:1, 3:1, 6:1, 4:1}, PressedValue);
var FALSE, MIXED, TRUE, UNDEFINED;
var Lcom_google_gwt_aria_client_PressedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'PressedValue', 60, values_0);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(104, 125, {}, PrimitiveValueAttribute);
_.getSingleValue = function getSingleValue_0(value_0){
  return '' + value_0;
}
;
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 104);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(304, 5, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 304);
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(306, 5, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 306);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(305, 5, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 305);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(307, 5, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 307);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(310, 5, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 310);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(308, 5, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 308);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(309, 5, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 309);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(311, 5, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 311);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(312, 5, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 312);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(313, 5, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 313);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(314, 5, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 314);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(315, 5, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 315);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  PRESSED = new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var HIDDEN, PRESSED;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(316, 5, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 316);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(319, 5, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 319);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(317, 5, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 317);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(318, 5, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 318);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(320, 5, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 320);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(321, 5, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 321);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(322, 5, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 322);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(323, 5, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 323);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(326, 5, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 326);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(324, 5, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 324);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(325, 5, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 325);
function $elapsedMillis(this$static){
  return now_1() - this$static.start_0;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(94, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 94);
function isScript(){
  return true;
}

function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $printStackTrace(this$static, out){
  var element, element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    t != this$static && $append_0(out.builder, 'Caused by: ');
    $append_0(out.builder, '' + t);
    $append_0(out.builder, '\n');
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      $append_0(out.builder, '\tat ' + element);
      $append_0(out.builder, '\n');
    }
  }
}

function $toString_0(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(7, 1, $intern_3);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_2(){
  return $toString_0(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 7);
defineClass(13, 7, $intern_4);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 13);
function RuntimeException(){
  $fillInStackTrace(this);
}

function RuntimeException_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(17, 13, $intern_4, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 17);
defineClass(131, 17, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 131);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(45, 131, {45:1, 3:1, 13:1, 7:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 45);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
defineClass(353, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 353);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 7)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw unwrap_5($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $log_1(handler.val$log2, ($clinit_Level() , e.getMessage()), e);
    return;
  }
  reportToBrowser(instanceOf(e, 45)?dynamicCast(e, 45).getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(159, 353, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 159);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(160, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 160);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(161, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 161);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 350);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(365, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 365);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(132, 365, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_5, 52, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 132);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(366, 365, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_5, 52, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 366);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(133, 366, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 133);
function checkCriticalArgument(expression, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException(format('Enum constant undefined: %s', errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function format(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_0(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_0(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getSubPixelScrollWidth(this$static){
  return this$static.scrollWidth || 0;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $touchGetSubPixelPageX(touch){
  return touch.pageX || 0;
}

function $touchGetSubPixelPageY(touch){
  return touch.pageY || 0;
}

function $createMouseEvent(doc, type_0, canBubble, cancelable, detail, screenX_0, screenY_0, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
  button == 1?(button = 0):button == 4?(button = 1):(button = 2);
  var evt = doc.createEvent('MouseEvents');
  evt.initMouseEvent(type_0, canBubble, cancelable, null, detail, screenX_0, screenY_0, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
  return evt;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  $setInnerText(elem, source);
  return elem;
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $isRTL(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function $getScrollLeft(elem){
  var left;
  left = (elem.scrollLeft || 0) | 0;
  $isRTL(elem) && (left = -left);
  return left;
}

function $getTabIndex(elem){
  return elem.tabIndex < $intern_6?elem.tabIndex:-(elem.tabIndex % $intern_6) - 1;
}

function $setScrollLeft(elem, left){
  $isRTL(elem) && (left = -left);
  elem.scrollLeft = left;
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

function $getClientHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_2, 8, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(8, 4, $intern_7);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 8, values_1);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(213, 8, $intern_7, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 213, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(222, 8, $intern_7, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 222, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(223, 8, $intern_7, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 223, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(224, 8, $intern_7, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 224, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(225, 8, $intern_7, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 225, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(226, 8, $intern_7, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 226, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(227, 8, $intern_7, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 227, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(228, 8, $intern_7, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 228, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(229, 8, $intern_7, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 229, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(214, 8, $intern_7, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 214, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(215, 8, $intern_7, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 215, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(216, 8, $intern_7, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 216, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(217, 8, $intern_7, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 217, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(218, 8, $intern_7, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 218, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(219, 8, $intern_7, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 219, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(220, 8, $intern_7, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 220, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(221, 8, $intern_7, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 221, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_2, 41, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(41, 4, $intern_8);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 41, values_2);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(230, 41, $intern_8, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 230, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(231, 41, $intern_8, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 231, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(232, 41, $intern_8, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 232, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(233, 41, $intern_8, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 233, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_2, 42, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(42, 4, $intern_9);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 42, values_3);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(234, 42, $intern_9, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 234, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(235, 42, $intern_9, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 235, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(236, 42, $intern_9, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 236, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(237, 42, $intern_9, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 237, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_2, 43, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(43, 4, $intern_10);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 43, values_4);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(238, 43, $intern_10, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 238, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(239, 43, $intern_10, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 239, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(240, 43, $intern_10, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 240, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(241, 43, $intern_10, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 241, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_2, 19, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(19, 4, $intern_11);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 19, values_5);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(204, 19, $intern_11, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 204, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(205, 19, $intern_11, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 205, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(206, 19, $intern_11, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 206, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(207, 19, $intern_11, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 207, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(208, 19, $intern_11, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 208, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(209, 19, $intern_11, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 209, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(210, 19, $intern_11, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 210, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(211, 19, $intern_11, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 211, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(212, 19, $intern_11, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 212, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_2, 68, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(68, 4, $intern_12);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 68, values_6);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(242, 68, $intern_12, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 242, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(243, 68, $intern_12, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 243, null);
defineClass(376, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 376);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(377, 376, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 377);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 11);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 59);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(383, 377, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 383);
defineClass(384, 383, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 384);
defineClass(385, 384, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 385);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(247, 385, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 81).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 247);
defineClass(179, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 179);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(64, 179, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 64);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 11);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_2(this);
  this.name_0 = eventName;
}

defineClass(59, 64, {59:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 59);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(263, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 263);
defineClass(389, 384, {});
var impl;
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 389);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function TouchCancelEvent(){
}

defineClass(341, 389, {}, TouchCancelEvent);
_.dispatch = function dispatch_0(handler){
  $onTouchEnd(dynamicCast(handler, 399).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 341);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function TouchEndEvent(){
}

defineClass(340, 389, {}, TouchEndEvent);
_.dispatch = function dispatch_1(handler){
  $onTouchEnd(dynamicCast(handler, 398).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 340);
defineClass(337, 1, {});
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetector', 337);
function TouchEvent$TouchSupportDetectorNo(){
  var elem;
  elem = document.createElement('div');
  elem.setAttribute('ontouchstart', 'return;');
  typeof elem.ontouchstart == 'function';
}

defineClass(338, 337, {}, TouchEvent$TouchSupportDetectorNo);
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetectorNo_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetectorNo', 338);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch(this$static, handler){
  $onTouchMove(handler.this$01, this$static);
}

function TouchMoveEvent(){
}

defineClass(339, 389, {}, TouchMoveEvent);
_.dispatch = function dispatch_2(handler){
  $dispatch(this, dynamicCast(handler, 397));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 339);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_0(this$static, handler){
  $onTouchStart(handler.this$01, this$static);
}

function TouchStartEvent(){
}

defineClass(336, 389, {}, TouchStartEvent);
_.dispatch = function dispatch_3(handler){
  $dispatch_0(this, dynamicCast(handler, 396));
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 336);
function $dispatch_1(this$static, handler){
  this$static.attached?$setupBustClickHandler(handler.this$01):$removeBustClickHandler(handler.this$01);
}

function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_4) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(261, 377, {}, AttachEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_1(this, dynamicCast(handler, 395));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_4;
}
;
_.attached = false;
var TYPE_4;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 261);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_5) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(260, 377, {}, CloseEvent_0);
_.dispatch = function dispatch_5(handler){
  dynamicCast(handler, 391);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 260);
function ResizeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new ResizeEvent;
    $fireEvent(source, event_0);
  }
}

defineClass(349, 377, {}, ResizeEvent);
_.dispatch = function dispatch_6(handler){
  $finish(dynamicCast(handler, 393).this$11);
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 349);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 65)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap_5($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(76, 1, {21:1}, HandlerManager, HandlerManager_0);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 76);
defineClass(378, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 378);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_4(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_2(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(dynamicCast(handler, 34));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 7)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_5(causes, e);
        }
         else 
          throw unwrap_5($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 61) , dynamicCast(sourceMap.remove_2(source), 11) , sourceMap.isEmpty() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 61);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_0(source), 11);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_1(this$static.map_0, type_0), 61);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_0(source), 11);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_1(c$iterator.last = c$iterator.i++), 351));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

defineClass(180, 378, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 180);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(181, 180, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 181);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(264, 1, {392:1}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 264);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 7);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 7);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(65, 17, $intern_13, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 65);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(116, 65, $intern_13, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 116);
function throwIfNull(value_0){
  if (null == value_0) {
    throw new NullPointerException_0('encodedURLComponent cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_2, 78, 0, [RTL, LTR, DEFAULT]);
}

defineClass(78, 4, {78:1, 3:1, 6:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 78, values_7);
defineClass(381, 1, {});
_.isArray_0 = function isArray(){
  return null;
}
;
_.isBoolean = function isBoolean(){
  return null;
}
;
_.isNumber = function isNumber(){
  return null;
}
;
_.isObject = function isObject(){
  return null;
}
;
_.isString = function isString(){
  return null;
}
;
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 381);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function $set_1(this$static, index_0, value_0){
  var previous;
  previous = $get(this$static, index_0);
  $set0(this$static, index_0, value_0);
  return previous;
}

function $set0(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.jsArray[index_0] = value_0;
}

function JSONArray(){
  this.jsArray = [];
}

function JSONArray_0(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(48, 381, {48:1}, JSONArray, JSONArray_0);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 48)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 48).jsArray;
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsArray);
}
;
_.isArray_0 = function isArray_0(){
  return this;
}
;
_.toString$ = function toString_5(){
  var c, i, sb;
  sb = new StringBuilder_1('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append(sb, $get(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 48);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE_0 = new JSONBoolean(false);
  TRUE_0 = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(124, 381, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.isBoolean = function isBoolean_0(){
  return this;
}
;
_.toString$ = function toString_6(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_0, TRUE_0;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 124);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  this.detailMessage = !cause?null:$toString_0(cause);
  this.cause = cause;
  $fillInStackTrace(this);
}

defineClass(101, 17, $intern_4, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 101);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_0 = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(262, 381, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString$ = function toString_7(){
  return 'null';
}
;
var instance_0;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 262);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(32, 381, {32:1}, JSONNumber);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 32)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 32).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode$ = function hashCode_4(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.isNumber = function isNumber_0(){
  return this;
}
;
_.toString$ = function toString_8(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 32);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put(this$static, key, jsonValue){
  var previous;
  previous = $get_0(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_1(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_1('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initDim(Ljava_lang_String_2_classLit, $intern_2, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_0(sb, escapeValue(key));
    sb.string += ':';
    $append(sb, $get_0(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(37, 381, {37:1}, JSONObject, JSONObject_0);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 37)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 37).jsObject;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this.jsObject);
}
;
_.isObject = function isObject_0(){
  return this;
}
;
_.toString$ = function toString_9(){
  return $toString_1(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 37);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE_0:FALSE_0;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_0;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray_0(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw new NullPointerException;
  }
  if (jsonString.length == 0) {
    throw new IllegalArgumentException('empty argument');
  }
  try {
    return evaluate(jsonString, true);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 45)) {
      ex = $e0;
      throw new JSONException_0(ex);
    }
     else 
      throw unwrap_5($e0);
  }
}

function throwJSONException(message){
  throw new JSONException(message);
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(25, 381, {25:1}, JSONString);
_.equals$ = function equals_4(other){
  if (!instanceOf(other, 25)) {
    return false;
  }
  return $equals_0(this.value_0, dynamicCast(other, 25).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_0(this.value_0);
}
;
_.isString = function isString_0(){
  return this;
}
;
_.toString$ = function toString_10(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 25);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap_5(e){
  var jse;
  if (instanceOf(e, 45)) {
    jse = dynamicCast(e, 45);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 7)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_14;
  a1 = value_0 >> 22 & $intern_14;
  a2 = value_0 < 0?$intern_15:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_16 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_16 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_16 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_14;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_14;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_17 + a.h * $intern_18;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_14);
  setM(a, sum1 & $intern_14);
  setH(a, sum2 & $intern_15);
  return true;
}

var remainder;
function div(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_19) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_18) {
    a2 = round_int(value_0 / $intern_18);
    value_0 -= a2 * $intern_18;
  }
  a1 = 0;
  if (value_0 >= $intern_17) {
    a1 = round_int(value_0 / $intern_17);
    value_0 -= a1 * $intern_17;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 406, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_14;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_14;
  c2 += c1 >> 22;
  c1 &= $intern_14;
  c2 &= $intern_15;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_14;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_14;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_14, m:res1 & $intern_14, h:res2 & $intern_15};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_16) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_15:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_15:0;
    res1 = negative?$intern_14:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_14, m:res1 & $intern_14, h:res2 & $intern_15};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_15;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_14, m:res1 & $intern_14, h:res2 & $intern_15};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_14, m:sum1 & $intern_14, h:sum2 & $intern_15};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_19;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_17 + a.h * $intern_18;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_11(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_16 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_11(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_14, $intern_14, 524287);
  MIN_VALUE = create0(0, 0, $intern_16);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad($clinit_LogConfiguration());
  $clinit_GWTExternalProto();
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child, userObject){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child, userObject);
  $add_4(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration, callback){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new AbstractList$IteratorImpl(this$static.layers); l$iterator0.i < l$iterator0.this$01_0.size_1();) {
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_1(l$iterator0.last = l$iterator0.i++), 79));
      l.left = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(l);
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_1(l$iterator.last = l$iterator.i++), 79));
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static, callback);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_8(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImpl;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(201, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 201);
function $onUpdate(this$static, progress){
  var l, l$iterator, child;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.this$01.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_1(l$iterator.last = l$iterator.i++), 79));
    l.setTargetLeft && (l.left = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(l);
    !!this$static.val$callback2 && (child = l.userObject , instanceOf(child, 73) && dynamicCast(child, 73).onResize() , undefined);
  }
}

function Layout$1(this$0, val$callback){
  this.this$01 = this$0;
  this.val$callback2 = val$callback;
  Animation.call(this, (!instance && (instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance));
}

defineClass(202, 119, {}, Layout$1);
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 202);
function $setBottomHeight(this$static, bottom, bottomUnit, height, heightUnit){
  this$static.setTargetBottom = this$static.setTargetHeight = true;
  this$static.setTargetTop = false;
  this$static.targetBottom = bottom;
  this$static.targetHeight = height;
  this$static.targetBottomUnit = bottomUnit;
  this$static.targetHeightUnit = heightUnit;
}

function $setLeftRight(this$static, left, leftUnit, right, rightUnit){
  this$static.setTargetLeft = this$static.setTargetRight = true;
  this$static.setTargetWidth = false;
  this$static.targetLeft = left;
  this$static.targetRight = right;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetRightUnit = rightUnit;
}

function $setLeftWidth(this$static, left, leftUnit, width_0, widthUnit){
  this$static.setTargetLeft = this$static.setTargetWidth = true;
  this$static.setTargetRight = false;
  this$static.targetLeft = left;
  this$static.targetWidth = width_0;
  this$static.targetLeftUnit = leftUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setRightWidth(this$static, right, rightUnit, width_0, widthUnit){
  this$static.setTargetRight = this$static.setTargetWidth = true;
  this$static.setTargetLeft = false;
  this$static.targetRight = right;
  this$static.targetWidth = width_0;
  this$static.targetRightUnit = rightUnit;
  this$static.targetWidthUnit = widthUnit;
}

function $setTopBottom(this$static, top_0, topUnit, bottom, bottomUnit){
  this$static.setTargetTop = this$static.setTargetBottom = true;
  this$static.setTargetHeight = false;
  this$static.targetTop = top_0;
  this$static.targetBottom = bottom;
  this$static.targetTopUnit = topUnit;
  this$static.targetBottomUnit = bottomUnit;
}

function $setTopHeight(this$static, top_0, topUnit, height, heightUnit){
  this$static.setTargetTop = this$static.setTargetHeight = true;
  this$static.setTargetBottom = false;
  this$static.targetTop = top_0;
  this$static.targetHeight = height;
  this$static.targetTopUnit = topUnit;
  this$static.targetHeightUnit = heightUnit;
}

function Layout$Layer(container, child, userObject){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
  this.userObject = userObject;
}

defineClass(79, 1, {79:1}, Layout$Layer);
_.bottom = 0;
_.height = 0;
_.left = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 79);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container, style;
  container = $doc.createElement('div');
  container.appendChild(child);
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  style = child.style;
  $setPropertyImpl(style, 'position', 'absolute');
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'top', '0.0px');
  $setPropertyImpl(style, 'right', '0.0px');
  $setPropertyImpl(style, 'bottom', '0.0px');
  parent_0.insertBefore(container, null);
  return container;
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ($getSubPixelOffsetWidth(this$static.relativeRuler) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.1;
    case 8:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.01;
    case 6:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.254;
    case 4:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.00353;
    case 5:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPropertyImpl(parent_0.style, 'position', ($clinit_Style$Position() , 'relative'));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $layout_0(layer){
  var style;
  style = layer.container.style;
  layer.visible?$setPropertyImpl(style, 'display', ''):$setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  style['left'] = layer.setLeft?layer.left + 'px':'';
  style['top'] = layer.setTop?layer.top_0 + 'px':'';
  style['right'] = layer.setRight?layer.right + 'px':'';
  style['bottom'] = layer.setBottom?layer.bottom + 'px':'';
  style['width'] = layer.setWidth?layer.width_0 + 'px':'';
  style['height'] = layer.setHeight?layer.height + 'px':'';
  style = layer.child.style;
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'right', '0.0px');
  }
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '0.0px');
  }
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent(container);
  $getParentElement(child) == container && $removeFromParent(child);
  style = child.style;
  $setPropertyImpl(style, 'position', '');
  $setPropertyImpl(style, 'left', '');
  $setPropertyImpl(style, 'top', '');
  $setPropertyImpl(style, 'width', '');
  $setPropertyImpl(style, 'height', '');
}

function LayoutImpl(){
  $clinit_LayoutImpl();
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $doc.createElement('div');
  ruler.innerHTML = '&nbsp;';
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set_0(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_2, 63, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE_1)]));
  return ruler;
}

defineClass(259, 1, {}, LayoutImpl);
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 259);
function $getLevel(this$static){
  if (this$static.level) {
    return this$static.level;
  }
  return $clinit_Level() , ALL;
}

function $setFormatter(this$static, newFormatter){
  this$static.formatter = newFormatter;
}

function $setLevel(this$static, newLevel){
  this$static.level = newLevel;
}

defineClass(75, 1, {75:1});
var Ljava_util_logging_Handler_2_classLit = createForClass('java.util.logging', 'Handler', 75);
function ConsoleLogHandler(){
  $setFormatter(this, new TextLogFormatter(true));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(185, 75, {75:1}, ConsoleLogHandler);
_.publish = function publish(record){
  var msg;
  if (!window.console || ($getLevel(this) , false)) {
    return;
  }
  msg = $format(this.formatter, record);
  $clinit_Level();
  window.console.error(msg);
}
;
var Lcom_google_gwt_logging_client_ConsoleLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'ConsoleLogHandler', 185);
function DevelopmentModeLogHandler(){
  $setFormatter(this, new TextLogFormatter(false));
  $setLevel(this, ($clinit_Level() , ALL));
}

defineClass(186, 75, {75:1}, DevelopmentModeLogHandler);
_.publish = function publish_0(record){
  return;
}
;
var Lcom_google_gwt_logging_client_DevelopmentModeLogHandler_2_classLit = createForClass('com.google.gwt.logging.client', 'DevelopmentModeLogHandler', 186);
function $clinit_LogConfiguration(){
  $clinit_LogConfiguration = emptyMethod;
  impl_0 = new LogConfiguration$LogConfigurationImplSevere;
}

function $onModuleLoad(){
  var log_0;
  $configureClientSideLogging(impl_0);
  if (!uncaughtExceptionHandler) {
    log_0 = getLogger(($ensureNamesAreInitialized(Lcom_google_gwt_logging_client_LogConfiguration_2_classLit) , Lcom_google_gwt_logging_client_LogConfiguration_2_classLit.typeName));
    setUncaughtExceptionHandler(new LogConfiguration$1(log_0));
  }
}

var impl_0;
var Lcom_google_gwt_logging_client_LogConfiguration_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration', null);
function LogConfiguration$1(val$log){
  this.val$log2 = val$log;
}

defineClass(129, 1, {}, LogConfiguration$1);
var Lcom_google_gwt_logging_client_LogConfiguration$1_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/1', 129);
function $configureClientSideLogging(this$static){
  this$static.root = (new LoggerImplSevere , $ensureLogger(getLogManager(), ''));
  this$static.root.impl.useParentHandlers = false;
  $setLevels(this$static.root);
  $setDefaultHandlers(this$static.root);
}

function $setDefaultHandlers(l){
  var console_0, dev;
  console_0 = new ConsoleLogHandler;
  $addHandler_0(l.impl, console_0);
  dev = new DevelopmentModeLogHandler;
  $addHandler_0(l.impl, dev);
}

function $setLevels(l){
  var level, levelParam, paramsForName;
  levelParam = (ensureListParameterMap() , paramsForName = dynamicCast(listParamMap.get_0('logLevel'), 11) , !paramsForName?null:dynamicCastToString(paramsForName.get_1(paramsForName.size_1() - 1)));
  level = levelParam == null?null:($clinit_Level() , $parse_0(levelParam));
  level?$setLevel_0(l.impl, level):$setLevel_1(l, ($clinit_Level() , INFO));
}

defineClass(364, 1, {});
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplRegular', 364);
function LogConfiguration$LogConfigurationImplSevere(){
}

defineClass(128, 364, {}, LogConfiguration$LogConfigurationImplSevere);
var Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_2_classLit = createForClass('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplSevere', 128);
defineClass(386, 1, {});
var Ljava_util_logging_Formatter_2_classLit = createForClass('java.util.logging', 'Formatter', 386);
defineClass(387, 386, {});
var Lcom_google_gwt_logging_impl_FormatterImpl_2_classLit = createForClass('com.google.gwt.logging.impl', 'FormatterImpl', 387);
function $format(this$static, event_0){
  var message, date, s;
  message = new StringBuilder;
  $append_0(message, (date = new Date_0(event_0.millis) , s = new StringBuilder , $append_0(s, $toString_4(date)) , s.string += ' ' , $append_0(s, event_0.loggerName) , s.string += '\n' , s.string += 'SEVERE' , s.string += ': ' , s.string));
  $append_0(message, event_0.msg);
  this$static.showStackTraces && !!event_0.thrown && $printStackTrace(event_0.thrown, new StackTracePrintStream(message));
  return message.string;
}

function TextLogFormatter(showStackTraces){
  this.showStackTraces = showStackTraces;
}

defineClass(122, 387, {}, TextLogFormatter);
_.showStackTraces = false;
var Lcom_google_gwt_logging_client_TextLogFormatter_2_classLit = createForClass('com.google.gwt.logging.client', 'TextLogFormatter', 122);
function $parse_0(name_0){
  name_0 = name_0.toUpperCase();
  if ($equals_0(name_0, 'ALL')) {
    return $clinit_Level() , ALL;
  }
   else if ($equals_0(name_0, 'CONFIG')) {
    return $clinit_Level() , CONFIG;
  }
   else if ($equals_0(name_0, 'FINE')) {
    return $clinit_Level() , FINE;
  }
   else if ($equals_0(name_0, 'FINER')) {
    return $clinit_Level() , FINER;
  }
   else if ($equals_0(name_0, 'FINEST')) {
    return $clinit_Level() , FINEST;
  }
   else if ($equals_0(name_0, 'INFO')) {
    return $clinit_Level() , INFO;
  }
   else if ($equals_0(name_0, 'OFF')) {
    return $clinit_Level() , OFF;
  }
   else if ($equals_0(name_0, 'SEVERE')) {
    return $clinit_Level() , SEVERE;
  }
   else if ($equals_0(name_0, 'WARNING')) {
    return $clinit_Level() , WARNING;
  }
  throw new IllegalArgumentException('Invalid level "' + name_0 + '"');
}

function $addHandler_0(this$static, handler){
  $add_4(this$static.handlers, handler);
}

function $getEffectiveLevel(this$static){
  var effectiveLevel, logger;
  if (this$static.level) {
    return this$static.level;
  }
  logger = this$static.parent_0;
  while (logger) {
    effectiveLevel = logger.impl.level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.impl.parent_0;
  }
  return $clinit_Level() , INFO;
}

function $getHandlers(this$static){
  return dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, $intern_20, 75, this$static.handlers.array.length, 0, 1)), 127);
}

function $log(this$static, msg, thrown){
  var record;
  if ($getEffectiveLevel(this$static).intValue() <= 1000) {
    record = new LogRecord(msg);
    record.thrown = thrown;
    $setLoggerName(record, this$static.name_0);
    $log_0(this$static, record);
  }
}

function $log_0(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if ($getEffectiveLevel(this$static).intValue() <= 1000) {
    for (handler$array0 = dynamicCast($toArray(this$static.handlers, initDim(Ljava_util_logging_Handler_2_classLit, $intern_20, 75, this$static.handlers.array.length, 0, 1)), 127) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish(record);
    }
    logger = this$static.useParentHandlers?this$static.parent_0:null;
    while (logger) {
      for (handler$array = $getHandlers(logger.impl) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish(record);
      }
      logger = logger.impl.useParentHandlers?logger.impl.parent_0:null;
    }
  }
}

function $setLevel_0(this$static, newLevel){
  this$static.level = newLevel;
}

function $setName(this$static, newName){
  this$static.name_0 = newName;
}

function $setParent(this$static, newParent){
  !!newParent && (this$static.parent_0 = newParent);
}

defineClass(151, 1, {});
_.level = null;
_.useParentHandlers = false;
var Lcom_google_gwt_logging_impl_LoggerImplRegular_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplRegular', 151);
function LoggerImplSevere(){
  this.useParentHandlers = true;
  this.handlers = new ArrayList;
}

defineClass(93, 151, {}, LoggerImplSevere);
var Lcom_google_gwt_logging_impl_LoggerImplSevere_2_classLit = createForClass('com.google.gwt.logging.impl', 'LoggerImplSevere', 93);
defineClass(372, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 372);
defineClass(373, 372, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 373);
defineClass(374, 373, {});
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 374);
function StackTracePrintStream(builder){
  this.builder = builder;
}

defineClass(251, 374, {}, StackTracePrintStream);
var Lcom_google_gwt_logging_impl_StackTracePrintStream_2_classLit = createForClass('com.google.gwt.logging.impl', 'StackTracePrintStream', 251);
function SafeUriString(uri_0){
  if (uri_0 == null) {
    throw new NullPointerException_0('uri is null');
  }
  this.uri_0 = uri_0;
}

defineClass(70, 1, {352:1, 70:1}, SafeUriString);
_.equals$ = function equals_5(obj){
  if (!instanceOf(obj, 352)) {
    return false;
  }
  return $equals_0(this.uri_0, dynamicCast(dynamicCast(obj, 352), 70).uri_0);
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 70);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = 0 > oldVelocity - minDecel?0:oldVelocity - minDecel;
    newVelocity = newVelocity < maxVelocityX?newVelocity:maxVelocityX;
  }
   else {
    minVelocityX = 0 < oldVelocity + minDecel?0:oldVelocity + minDecel;
    newVelocity = newVelocity > minVelocityX?newVelocity:minVelocityX;
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = pow_0(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point(elapsedMillis, elapsedMillis));
  position = state.position;
  $setPosition(state, new Point(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if (abs_0(newVelocity.x_0) < 0.02 && abs_0(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum(){
}

defineClass(342, 1, {}, DefaultMomentum);
var Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client', 'DefaultMomentum', 342);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position = position;
}

function Momentum$State(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position = new Point_0(initialPosition);
  this.velocity = new Point_0(initialVelocity);
}

defineClass(343, 1, {}, Momentum$State);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
var Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client', 'Momentum/State', 343);
function $minus(this$static, c){
  return new Point(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_0(c){
  Point.call(this, c.x_0, c.y_0);
}

defineClass(20, 1, {20:1}, Point, Point_0);
_.equals$ = function equals_6(obj){
  var c;
  if (!instanceOf(obj, 20)) {
    return false;
  }
  c = dynamicCast(obj, 20);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode$ = function hashCode_8(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString$ = function toString_12(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client', 'Point', 20);
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = event_0.nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function $getWidgetScrollPosition(this$static){
  return new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = abs_0(diff.x_0);
  absDiffY = abs_0(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = now_1();
  same = false;
  for (point$iterator = new AbstractList$IteratorImpl(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$01_0.size_1();) {
    point = (checkCriticalElement(point$iterator.i < point$iterator.this$01_0.size_1()) , dynamicCast(point$iterator.this$01_0.get_1(point$iterator.last = point$iterator.i++), 56));
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  touchTime = now_1();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs_0(diff.x_0);
    absDiffY = abs_0(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getHorizontalScrollPosition(this$static.widget);
        hMin = $getMinimumHorizontalScrollPosition_0(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition_0(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = $getVerticalScrollPosition(this$static.widget);
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  $eventPreventDefault(event_0.nativeEvent);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_0(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  startTouchTime = now_1();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_4(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_0(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new AbstractList$IteratorImpl(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$01_0.size_1();) {
    reg = (checkCriticalElement(reg$iterator.i < reg$iterator.this$01_0.size_1()) , dynamicCast(reg$iterator.this$01_0.get_1(reg$iterator.last = reg$iterator.i++), 392));
    $removeHandler(reg.real);
  }
  this$static.handlerRegs.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static)));
  this$static.attachHandlerReg = $addHandler_1(widget, new TouchScroller$1(this$static), (!TYPE_4 && (TYPE_4 = new GwtEvent$Type) , TYPE_4));
  $add_4(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_3)));
  $add_4(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_2)));
  $add_4(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_1)));
  $add_4(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_0)));
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static));
}

function TouchScroller(){
  this.handlerRegs = new ArrayList;
  this.lastTouchPosition = new TouchScroller$TemporalPoint;
  this.recentTouchPosition = new TouchScroller$TemporalPoint;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint;
  this.touchPositionsDuringMomentum = new ArrayList;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand(this);
  $setMomentum(this, new DefaultMomentum);
}

defineClass(327, 1, {}, TouchScroller);
_.dragging = false;
_.touching = false;
var isSupported;
var Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller', 327);
function TouchScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(331, 1, {395:1, 34:1}, TouchScroller$1);
var Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/1', 331);
function TouchScroller$2(this$0){
  this.this$01 = this$0;
}

defineClass(332, 1, {396:1, 34:1}, TouchScroller$2);
var Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/2', 332);
function TouchScroller$3(this$0){
  this.this$01 = this$0;
}

defineClass(333, 1, {397:1, 34:1}, TouchScroller$3);
var Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/3', 333);
function TouchScroller$4(this$0){
  this.this$01 = this$0;
}

defineClass(334, 1, {398:1, 34:1}, TouchScroller$4);
var Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/4', 334);
function TouchScroller$5(this$0){
  this.this$01 = this$0;
}

defineClass(335, 1, {399:1, 34:1}, TouchScroller$5);
var Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/5', 335);
function $onPreviewNativeEvent(this$static, event_0){
  var clickPoint;
  if (1 == $getTypeInt(event_0.nativeEvent)) {
    clickPoint = new Point((event_0.nativeEvent.clientX || 0) | 0, (event_0.nativeEvent.clientY || 0) | 0);
    if ($isClickScrollTriggeringTouch(this$static.this$01, clickPoint) || $isClickTouchPositionDuringMomentum(this$static.this$01, clickPoint)) {
      event_0.isCanceled = true;
      $eventStopPropagation(event_0.nativeEvent);
      $eventPreventDefault(event_0.nativeEvent);
    }
  }
}

function TouchScroller$6(this$0){
  this.this$01 = this$0;
}

defineClass(126, 1, {34:1, 394:1}, TouchScroller$6);
var Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/6', 126);
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$01.momentumCommand && (this$static.this$01.momentumCommand = null);
}

function TouchScroller$MomentumCommand(this$0, endVelocity){
  this.this$01 = this$0;
  this.duration = new Duration;
  this.initialPosition = $getWidgetScrollPosition(this.this$01);
  this.state = new Momentum$State(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1(this));
}

defineClass(328, 1, {}, TouchScroller$MomentumCommand);
_.execute_0 = function execute_3(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$01.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$01, this.state.position);
  hPos = round_int(this.state.position.x_0);
  hMin = $getMinimumHorizontalScrollPosition_0(this.this$01.widget);
  hMax = $getMaximumHorizontalScrollPosition_0(this.this$01.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$01.widget);
  vPos = round_int(this.state.position.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand', 328);
function TouchScroller$MomentumCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(330, 1, {393:1, 34:1}, TouchScroller$MomentumCommand$1);
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand/1', 330);
function TouchScroller$MomentumTouchRemovalCommand(this$0){
  this.this$01 = this$0;
}

defineClass(329, 1, {}, TouchScroller$MomentumTouchRemovalCommand);
_.execute_0 = function execute_4(){
  var currentTime, iter, point;
  currentTime = now_1();
  iter = new AbstractList$IteratorImpl(this.this$01.touchPositionsDuringMomentum);
  while (iter.i < iter.this$01_0.size_1()) {
    point = (checkCriticalElement(iter.i < iter.this$01_0.size_1()) , dynamicCast(iter.this$01_0.get_1(iter.last = iter.i++), 56));
    currentTime - point.time >= 2500 && (checkState(iter.last != -1) , iter.this$01_0.remove_3(iter.last) , iter.i = iter.last , iter.last = -1);
  }
  return this.this$01.touchPositionsDuringMomentum.array.length != 0;
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumTouchRemovalCommand', 329);
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint(){
}

function TouchScroller$TemporalPoint_0(point, time){
  this.point = point;
  this.time = time;
}

defineClass(56, 1, {56:1}, TouchScroller$TemporalPoint, TouchScroller$TemporalPoint_0);
_.time = 0;
var Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/TemporalPoint', 56);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_1(evt, elem, eventListener);
  return true;
}

function dispatchEvent_1(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_DOM();
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  ($clinit_DOMImplStandard() , captureElem) == elem && (captureElem = null);
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  $clinit_DOM();
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  $clinit_DOMImplStandard();
  captureElem = elem;
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_7 && (TYPE_7 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_7, handler);
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

var handlers_0;
function $dispatch_2(this$static, handler){
  $onPreviewNativeEvent(handler, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_7 && !!handlers && $isEventHandled(handlers, TYPE_7)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(256, 377, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_7(handler){
  $dispatch_2(this, dynamicCast(handler, 394));
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_7, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 256);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_5?TYPE_5:(TYPE_5 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_6 && (TYPE_6 = new GwtEvent$Type) , TYPE_6), handler);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_8 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(178, 377, {}, Window$ClosingEvent);
_.dispatch = function dispatch_8(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 178);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = __substr(queryString, 1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (!instanceOf($e0, 45))
          throw unwrap_5($e0);
      }
      values = dynamicCast(out.get_0(key), 11);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_2(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 10);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 11)));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString, href_0, hashLoc, questionLoc;
  currentQueryString = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc >= 0 && (href_0 = href_0.substring(0, hashLoc)) , questionLoc = href_0.indexOf('?') , questionLoc > 0?href_0.substring(questionLoc):'');
  if (!listParamMap || !$equals_0(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(95, 76, {21:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 95);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_21;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_16;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_17;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_22;
    case 'gesturechange':
      return $intern_23;
    case 'gestureend':
      return $intern_24;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 23)?maybeListener:null;
}

function setEventListener_0(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_3, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $eventGetToElement(evt){
  if ($equals_0(evt.type, 'mouseover')) {
    return evt.target;
  }
  if ($equals_0(evt.type, 'mouseout')) {
    return evt.relatedTarget;
  }
  return null;
}

function $initEventSystem(){
  dispatchEvent_2 = $entry(dispatchEvent_3);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkBitlessEvent(elem, eventTypeName){
  $maybeInitializeEventSystem();
  $sinkBitlessEventImpl(elem, eventTypeName);
  $equals_0('dragover', eventTypeName) && $sinkBitlessEventImpl(elem, 'dragenter');
}

function $sinkBitlessEventImpl(elem, eventTypeName){
  var dispatchMap = bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_2:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_2:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_2:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_2:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_2:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_2:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_2:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_2:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_2:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_2:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_2:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_2:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_2:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_2:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_2:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_21 && (elem.onerror = bits & $intern_21?dispatchEvent_2:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_2:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_2:null);
  chMask & $intern_16 && (elem.onpaste = bits & $intern_16?dispatchEvent_2:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_2:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_2:null);
  chMask & $intern_17 && (elem.ontouchend = bits & $intern_17?dispatchEvent_2:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_2:null);
  chMask & $intern_22 && (elem.ongesturestart = bits & $intern_22?dispatchEvent_2:null);
  chMask & $intern_23 && (elem.ongesturechange = bits & $intern_23?dispatchEvent_2:null);
  chMask & $intern_24 && (elem.ongestureend = bits & $intern_24?dispatchEvent_2:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || !captureElem) {
    return;
  }
  dispatchEvent_0(evt, captureElem) && $eventStopPropagation(evt);
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_3(evt);
}

function dispatchEvent_3(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_1(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_3(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_2, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(252, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_5(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 252);
function WindowImplIE$2(){
}

defineClass(253, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_6(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 253);
function $addStyleDependentName(this$static, styleSuffix){
  $setStyleName(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + styleSuffix, true);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $removeStyleDependentName(this$static, styleSuffix){
  $setStyleName(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + styleSuffix, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setSize(this$static, width_0, height){
  this$static.setWidth_0(width_0);
  this$static.setHeight_0(height);
}

function $setStyleName(this$static, style, add_0){
  setStyleName(($clinit_DOM() , this$static.element), style, add_0);
}

function $setTitle(this$static, title_0){
  title_0 == null || title_0.length == 0?$removeAttribute(($clinit_DOM() , this$static.element), 'title'):$setAttribute(($clinit_DOM() , this$static.element), 'title', title_0);
}

function $setVisible(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent_0(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent(this$static.element, eventTypeName);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getClassName(elem);
  spaceIdx = $indexOf_0(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(18, 1, {22:1, 18:1});
_.setHeight_0 = function setHeight(height){
  $setHeight(this, height);
}
;
_.setSize = function setSize(width_0, height){
  $setSize(this, width_0, height);
}
;
_.setWidth_0 = function setWidth(width_0){
  $setWidth(this, width_0);
}
;
_.toString$ = function toString_13(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 18);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent_0(this$static, type_0.name_0):this$static.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this$static.element, typeInt | (this$static.element.__eventBits || 0))):(this$static.eventsToSink |= typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_1(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener_0(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener_0(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent_0(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, null));
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, this$static));
}

function $setParent_0(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(16, 18, $intern_25);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 16);
function $clear(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children);
  while (it.index_0 < it.this$01.size_0) {
    $next_0(it);
    $remove_4(it);
  }
}

defineClass(379, 16, $intern_25);
_.add_0 = function add_1(child){
  throw new UnsupportedOperationException_0('This panel does not support no-arg add()');
}
;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 379);
function $add(this$static, child, container){
  $removeFromParent_0(child);
  $add_3(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent_0(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent_0(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_3(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(96, 379, $intern_25);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 96);
function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(187, 96, $intern_25);
_.add_0 = function add_2(w){
  $add(this, w, ($clinit_DOM() , this.element));
}
;
_.remove = function remove_1(w){
  var removed;
  removed = $remove_0(this, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 187);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 16);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_5(caught, e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(191, 116, $intern_13, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 191);
function AttachDetachException$1(){
}

defineClass(192, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_7(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 192);
function AttachDetachException$2(){
}

defineClass(193, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_8(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 193);
function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = $getTabIndex(($clinit_DOM() , this$static.element));
  -1 == tabIndex && $setTabIndex(this$static.element, 0);
}

defineClass(244, 16, $intern_25);
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 244);
function ButtonBase(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(245, 244, $intern_25);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 245);
function $setCellHorizontalAlignment(td, align_0){
  $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(117, 96, $intern_25);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 117);
function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(($clinit_DOM() , this$static.element));
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    !this$static.curFace && $setCurrentFace_0(this$static, this$static.up);
    (1 & this$static.curFace.val$faceID5) > 0 && $toggleDown(this$static);
  }
}

function $getFaceFromID(this$static, id_0){
  switch (id_0) {
    case 1:
      return !this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down;
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && $setDownHoveringFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-hovering', 3)) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && $setUpHoveringFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-hovering', 2)) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && $setUpDisabledFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-disabled', 4)) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && $setDownDisabledFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-disabled', 5)) , this$static.downDisabled;
    default:throw new IllegalStateException_0(id_0 + ' is not a known face id.');
  }
}

function $setAriaPressed(this$static, newFace){
  var pressed;
  pressed = (newFace.val$faceID5 & 1) == 1;
  $clinit_Roles();
  $setAriaPressedState(($clinit_DOM() , this$static.element), ($clinit_PressedValue() , pressed?TRUE:FALSE));
}

function $setCurrentFace(this$static, faceID){
  var newFace;
  newFace = $getFaceFromID(this$static, faceID);
  $setCurrentFace_0(this$static, newFace);
}

function $setCurrentFace_0(this$static, newFace){
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name4);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name4);
    !($clinit_DOM() , this$static.element)['disabled'] && $setAriaPressed(this$static, newFace);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && $removeChild(($clinit_DOM() , this$static.element), this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    $clinit_DOM();
    $appendChild(this$static.element, resolve(this$static.curFaceElement));
  }
}

function $setDownDisabledFace(this$static, downDisabled){
  this$static.downDisabled = downDisabled;
}

function $setDownFace(this$static, down){
  this$static.down = down;
}

function $setDownHoveringFace(this$static, downHovering){
  this$static.downHovering = downHovering;
}

function $setEnabled(this$static, enabled){
  var newFaceID;
  if (!($clinit_DOM() , this$static.element)['disabled'] != enabled) {
    newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 4);
    newFaceID &= -3;
    $setCurrentFace(this$static, newFaceID);
    this$static.element['disabled'] = !enabled;
    if (enabled) {
      $setAriaPressed(this$static, (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace));
    }
     else {
      $cleanupCaptureState(this$static);
      $clinit_Roles();
      $removeAriaPressedState(this$static.element);
    }
  }
}

function $setUpDisabledFace(this$static, upDisabled){
  this$static.upDisabled = upDisabled;
}

function $setUpFace(this$static, up){
  this$static.up = up;
}

function $setUpHoveringFace(this$static, upHovering){
  this$static.upHovering = upHovering;
}

function $toggleDown(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 1);
  $setCurrentFace(this$static, newFaceID);
}

function $toggleHover(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 2);
  newFaceID &= -5;
  $setCurrentFace(this$static, newFaceID);
}

defineClass(120, 245, $intern_25);
_.onAttach = function onAttach_1(){
  !this.curFace && $setCurrentFace_0(this, this.up);
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  var keyCode, to, type_0;
  if (($clinit_DOM() , this.element)['disabled']) {
    return;
  }
  type_0 = $eventGetTypeInt(event_0.type);
  switch (type_0) {
    case 1:
      if (!this.allowClick) {
        $eventStopPropagation(event_0);
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        this.element.focus();
        !this.curFace && $setCurrentFace_0(this, this.up);
        (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
        setCapture(this.element);
        this.isCapturing = true;
        $eventPreventDefault(event_0);
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element);
        (2 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace).val$faceID5) > 0 && $eventGetButton(event_0) == 1 && $onClick(this);
      }

      break;
    case 64:
      this.isCapturing && $eventPreventDefault(event_0);
      break;
    case 32:
      to = (null , $eventGetToElement(event_0));
      if (isOrHasChildImpl(this.element, event_0.target) && (!to || !isOrHasChildImpl(this.element, to))) {
        this.isCapturing && (!this.curFace && $setCurrentFace_0(this, this.up) , (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this));
        !this.curFace && $setCurrentFace_0(this, this.up);
        (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
      }

      break;
    case 16:
      if (isOrHasChildImpl(this.element, event_0.target)) {
        !this.curFace && $setCurrentFace_0(this, this.up);
        (2 & this.curFace.val$faceID5) <= 0 && $toggleHover(this);
        this.isCapturing && (!this.curFace && $setCurrentFace_0(this, this.up) , (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this));
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        !this.curFace && $setCurrentFace_0(this, this.up);
        (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this);
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        !this.curFace && $setCurrentFace_0(this, this.up);
        (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this);
      }

  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = (event_0.keyCode | 0) & $intern_6;
    switch (type_0) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          !this.curFace && $setCurrentFace_0(this, this.up);
          (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          $onClick(this);
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          !this.curFace && $setCurrentFace_0(this, this.up);
          (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
          $onClick(this);
        }

    }
  }
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this);
  $cleanupCaptureState(this);
  !this.curFace && $setCurrentFace_0(this, this.up);
  (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
}
;
_.allowClick = false;
_.isCapturing = false;
_.isFocusing = false;
var Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton', 120);
function $getFace(this$static){
  if (!this$static.face_0) {
    if (!this$static.delegateTo) {
      this$static.face_0 = ($clinit_DOM() , $doc.createElement('div'));
      return this$static.face_0;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face_0;
  }
}

function $setImage(this$static, image){
  this$static.face_0 = ($clinit_DOM() , image.element);
  !!this$static.this$01.curFace && $getFace(this$static.this$01.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$01, this$static.face_0);
}

defineClass(246, 1, {});
_.toString$ = function toString_14(){
  return this.val$name4;
}
;
var Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/Face', 246);
function CustomButton$2(this$0, $anonymous0, val$name, val$faceID){
  this.val$name4 = val$name;
  this.val$faceID5 = val$faceID;
  this.this$01 = this$0;
  this.delegateTo = $anonymous0;
}

defineClass(55, 246, {}, CustomButton$2);
_.val$faceID5 = 0;
var Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/2', 55);
function $setTextOrHtml(this$static, content_0){
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(255, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 255);
function $doLayout(this$static){
  var bottom, child, child$iterator, data_0, layer, left, right, top_0;
  left = 0;
  top_0 = 0;
  right = 0;
  bottom = 0;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_0(child$iterator);
    data_0 = child.layoutData;
    layer = data_0.layer;
    if (data_0.hidden) {
      layer.visible = false;
      continue;
    }
    switch ($getResolvedDirection(data_0.direction_0).ordinal) {
      case 0:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopHeight(layer, top_0, this$static.unit, data_0.size_0, this$static.unit);
        top_0 += data_0.size_0;
        break;
      case 2:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setBottomHeight(layer, bottom, this$static.unit, data_0.size_0, this$static.unit);
        bottom += data_0.size_0;
        break;
      case 3:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setLeftWidth(layer, left, this$static.unit, data_0.size_0, this$static.unit);
        left += data_0.size_0;
        break;
      case 1:
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
        $setRightWidth(layer, right, this$static.unit, data_0.size_0, this$static.unit);
        right += data_0.size_0;
        break;
      case 4:
        $setLeftRight(layer, left, this$static.unit, right, this$static.unit);
        $setTopBottom(layer, top_0, this$static.unit, bottom, this$static.unit);
    }
    layer.visible = true;
  }
}

function $getResolvedDirection(direction){
  if (direction == ($clinit_DockLayoutPanel$Direction() , LINE_START)) {
    return WEST;
  }
   else if (direction == LINE_END) {
    return EAST;
  }
  return direction;
}

function $insert(this$static, widget, direction, size_0){
  var children, data_0, layer;
  $removeFromParent_0(widget);
  children = this$static.children;
  $insert_0(children, widget, children.size_0);
  direction == ($clinit_DockLayoutPanel$Direction() , CENTER_0) && (this$static.center = widget);
  layer = $attachChild(this$static.layout, ($clinit_DOM() , widget.element), widget);
  data_0 = new DockLayoutPanel$LayoutData(direction, size_0, layer);
  widget.layoutData = data_0;
  $setParent_0(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function DockLayoutPanel(unit){
  ComplexPanel.call(this);
  this.unit = unit;
  $setElement(this, $doc.createElement('div'));
  this.layout = new Layout(($clinit_DOM() , this.element));
  this.layoutCmd = new DockLayoutPanel$DockAnimateCommand(this, this.layout);
}

defineClass(196, 96, $intern_26, DockLayoutPanel);
_.add_0 = function add_3(widget){
  $insert(this, widget, ($clinit_DockLayoutPanel$Direction() , CENTER_0), 0);
}
;
_.onAttach = function onAttach_2(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
}
;
_.onResize = function onResize_0(){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this.children); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_0(child$iterator);
    instanceOf(child, 73) && dynamicCast(child, 73).onResize();
  }
}
;
_.remove = function remove_2(w){
  var data_0, removed;
  removed = $remove_0(this, w);
  if (removed) {
    w == this.center && (this.center = null);
    data_0 = w.layoutData;
    $removeChild_0(this.layout, data_0.layer);
  }
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel', 196);
function $clinit_DockLayoutPanel$Direction(){
  $clinit_DockLayoutPanel$Direction = emptyMethod;
  NORTH = new DockLayoutPanel$Direction('NORTH', 0);
  EAST = new DockLayoutPanel$Direction('EAST', 1);
  SOUTH = new DockLayoutPanel$Direction('SOUTH', 2);
  WEST = new DockLayoutPanel$Direction('WEST', 3);
  CENTER_0 = new DockLayoutPanel$Direction('CENTER', 4);
  LINE_START = new DockLayoutPanel$Direction('LINE_START', 5);
  LINE_END = new DockLayoutPanel$Direction('LINE_END', 6);
}

function DockLayoutPanel$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_DockLayoutPanel$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit, 1), $intern_2, 47, 0, [NORTH, EAST, SOUTH, WEST, CENTER_0, LINE_START, LINE_END]);
}

defineClass(47, 4, {47:1, 3:1, 6:1, 4:1}, DockLayoutPanel$Direction);
var CENTER_0, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$Direction_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'DockLayoutPanel/Direction', 47, values_8);
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

defineClass(198, 1, {});
_.doBeforeLayout = function doBeforeLayout(){
}
;
_.execute_1 = function execute_9(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  this.doBeforeLayout();
  $layout(this.layout, this.duration, new LayoutCommand$1);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 198);
function DockLayoutPanel$DockAnimateCommand(this$0, layout){
  this.this$01 = this$0;
  this.layout = layout;
}

defineClass(199, 198, {}, DockLayoutPanel$DockAnimateCommand);
_.doBeforeLayout = function doBeforeLayout_0(){
  $doLayout(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$DockAnimateCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/DockAnimateCommand', 199);
function DockLayoutPanel$LayoutData(direction, size_0, layer){
  this.direction_0 = direction;
  this.size_0 = size_0;
  this.layer = layer;
}

defineClass(197, 1, {}, DockLayoutPanel$LayoutData);
_.hidden = false;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_DockLayoutPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DockLayoutPanel/LayoutData', 197);
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START;
defineClass(380, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 380);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(85, 380, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 85);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(97, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 97);
function $add_0(this$static, w){
  var td, td_0;
  td = (td_0 = ($clinit_DOM() , $doc.createElement('td')) , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(67, 117, $intern_25, HorizontalPanel);
_.add_0 = function add_4(w){
  $add_0(this, w);
}
;
_.remove = function remove_3(w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 67);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $setUrl(this$static, url_0){
  !!this$static.state && $setPropertyString(($clinit_DOM() , this$static.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , this$static.element), url_0.uri_0);
}

function $setUrl_0(this$static, url_0){
  $setUrl(this$static, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

function Image_0(url_0){
  $changeState(this, new Image$UnclippedState(this, url_0));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

function Image_1(url_0){
  $clinit_Image();
  Image_0.call(this, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

defineClass(31, 16, $intern_25, Image_1);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_0(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 31);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals_0('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(248, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 248);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(249, 1, {}, Image$State$1);
_.execute_1 = function execute_10(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString($getImageElement(this.val$image2), '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 249);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function $getUrl(image){
  return $clinit_UriUtils() , new SafeUriString(($clinit_DOM() , image.element).src);
}

function $setUrl_1(image, url_0){
  !!image.state && $setPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
}

function Image$UnclippedState(image, url_0){
  $replaceElement(image, $doc.createElement('img'));
  $clinit_DOM();
  $sinkEvents(image.element, 32768);
  image.eventsToSink == -1?$sinkEvents(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
  !!image.state && $setPropertyString(image.element, '__gwtLastUnhandledEvent', '');
  $setSrc(image.element, url_0.uri_0);
}

defineClass(121, 248, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 121);
function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(118, 16, $intern_25);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 118);
function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Label');
}

function Label_0(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0);
}

defineClass(33, 118, {26:1, 21:1, 23:1, 22:1, 27:1, 33:1, 18:1, 16:1}, Label, Label_0);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 33);
function LayoutCommand$1(){
}

defineClass(200, 1, {}, LayoutCommand$1);
var Lcom_google_gwt_user_client_ui_LayoutCommand$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand/1', 200);
function $onClick(this$static){
  var evt;
  !this$static.curFace && $setCurrentFace_0(this$static, this$static.up);
  (1 & this$static.curFace.val$faceID5) > 0 && $toggleDown(this$static);
  this$static.allowClick = true;
  evt = $createMouseEvent($doc, 'click', true, true, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  $dispatchEvent(($clinit_DOM() , this$static.element), evt);
  this$static.allowClick = false;
}

function PushButton(upImage){
  var e;
  ButtonBase.call(this, (e = $doc.createElement('div') , $setTabIndex(e, 0) , e));
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, 7165 | (this.element.__eventBits || 0))):(this.eventsToSink |= 7165);
  $setUpFace(this, new CustomButton$2(this, null, 'up', 0));
  $setClassName(($clinit_DOM() , this.element), 'gwt-CustomButton');
  $clinit_Roles();
  $set(BUTTON, this.element);
  $setImage(this.up, upImage);
  $setClassName(this.element, 'gwt-PushButton');
}

defineClass(87, 120, $intern_25, PushButton);
var Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PushButton', 87);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_9(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = dynamicCast($getStringValue(rootPanels, id_0), 77);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || ($clinit_DOM() , rp.element == elem)) {
      return rp;
    }
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

defineClass(77, 187, $intern_27, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 77);
function RootPanel$1(){
}

defineClass(189, 1, {}, RootPanel$1);
_.execute_2 = function execute_11(w){
  w.attached && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 189);
function RootPanel$2(){
}

defineClass(190, 1, {391:1, 34:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 190);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(188, 77, $intern_27, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 188);
function $getMaximumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?0:($getSubPixelScrollWidth(scrollable) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ($getSubPixelScrollWidth(scrollable) | 0):0;
}

function $isRtl(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}

function ScrollImpl(){
}

defineClass(103, 1, {}, ScrollImpl);
var impl_1;
var Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl', 103);
function $add_1(this$static, w){
  if (this$static.widget) {
    throw new IllegalStateException_0('SimplePanel can only contain one child widget');
  }
  $setWidget(this$static, w);
}

function $remove_1(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent_0(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && $remove_1(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.getContainerElement(), resolve($getElement(this$static.widget)));
    $setParent_0(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function SimplePanel_0(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(86, 379, $intern_25, SimplePanel);
_.add_0 = function add_5(w){
  $add_1(this, w);
}
;
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.iterator = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_4(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 86);
function $getHorizontalScrollPosition(this$static){
  return $getScrollLeft(($clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumHorizontalScrollPosition_0(this$static){
  return $getMaximumHorizontalScrollPosition((!impl_1 && (impl_1 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition_0(this$static){
  return $getMinimumHorizontalScrollPosition((!impl_1 && (impl_1 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getVerticalScrollPosition(this$static){
  return (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (!isSupported && (isSupported = ($clinit_Boolean() , !impl && (impl = new TouchEvent$TouchSupportDetectorNo) , $clinit_Boolean() , FALSE_1)) , isSupported.value_0?new TouchScroller:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function ScrollPanel(){
  SimplePanel.call(this);
  this.scrollableElem = ($clinit_DOM() , this.element);
  this.containerElem = $doc.createElement('div');
  $appendChild(this.scrollableElem, this.containerElem);
  this.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  $setPropertyImpl(this.scrollableElem.style, 'zoom', '1');
  $setPropertyImpl(this.containerElem.style, 'zoom', '1');
  $setTouchScrollingDisabled(this);
  !impl_1 && (impl_1 = new ScrollImpl);
}

defineClass(123, 86, $intern_26, ScrollPanel);
_.getContainerElement = function getContainerElement_0(){
  return $clinit_DOM() , this.containerElem;
}
;
_.onAttach = function onAttach_3(){
  $onAttach(this);
  setEventListener(($clinit_DOM() , this.scrollableElem), this);
}
;
_.onDetach = function onDetach_2(){
  setEventListener(($clinit_DOM() , this.scrollableElem), null);
  $onDetach(this);
}
;
_.onResize = function onResize_1(){
  var child;
  child = this.widget;
  !!child && instanceOf(child, 73) && dynamicCast(child, 73).onResize();
}
;
_.setHeight_0 = function setHeight_0(height){
  ($clinit_DOM() , this.element).style['height'] = height;
}
;
_.setSize = function setSize_0(width_0, height){
  ($clinit_DOM() , this.element).style['width'] = width_0;
  this.element.style['height'] = height;
}
;
_.setWidth_0 = function setWidth_0(width_0){
  ($clinit_DOM() , this.element).style['width'] = width_0;
}
;
var Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollPanel', 123);
function $next(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(194, 1, {}, SimplePanel$1);
_.hasNext = function hasNext(){
  return this.hasElement;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_5(){
  !!this.returned && $remove_1(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 194);
function $add_2(this$static, w){
  var td, tr, td_0;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = (td_0 = $doc.createElement('td') , $setCellHorizontalAlignment(td_0, this$static.horzAlign) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(($clinit_DOM() , this.table), 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(24, 117, $intern_25, VerticalPanel);
_.add_0 = function add_6(w){
  $add_2(this, w);
}
;
_.remove = function remove_6(w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this, w);
  removed && $removeChild(this.body_0, (null , $getParentElement(td)));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 24);
function $add_3(this$static, w){
  $insert_0(this$static, w, this$static.size_0);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 16, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_2(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_3(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_2(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 16, 4, 0, 1);
}

defineClass(258, 1, {}, WidgetCollection);
_.iterator = function iterator_2(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 258);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_4(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(80, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_7(){
  $remove_4(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 80);
function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_0('ie10', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(90, 7, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 90);
defineClass(29, 90, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 29);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7):null);
}

defineClass(130, 29, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 130);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(182, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 182);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(183, 1, {351:1}, SimpleEventBus$2);
_.execute_1 = function execute_12(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 183);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(184, 1, {351:1}, SimpleEventBus$3);
_.execute_1 = function execute_13(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 184);
function $setDocumento(this$static, documento){
  this$static.Documento = documento;
}

function $setGramatica(this$static, gramaticas){
  this$static.Gramaticas = gramaticas;
}

function DocumentCompleteJSON(){
}

defineClass(195, 1, $intern_2, DocumentCompleteJSON);
var Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2_classLit = createForClass('fdi.ucm.server.interconect.model', 'DocumentCompleteJSON', 195);
function $setColeccion(this$static, coleccion){
  this$static.Coleccion = coleccion;
}

function $setDescription(this$static, description){
  this$static.Description = description;
}

function $setIconPath(this$static, iconPath){
  this$static.IconPath = iconPath;
}

function $setId(this$static, id_0){
  this$static.Id = id_0;
}

function $setOperationalValues(this$static, operationalValues){
  this$static.OperationalValues = operationalValues;
}

function $setQRPath(this$static, qRPath){
  this$static.QRPath = qRPath;
}

function $setUserDocument(this$static, userDocument){
  this$static.UserDocument = userDocument;
}

function DocumentsJSON(){
}

defineClass(254, 1, $intern_2, DocumentsJSON);
var Lfdi_ucm_server_interconect_model_DocumentsJSON_2_classLit = createForClass('fdi.ucm.server.interconect.model', 'DocumentsJSON', 254);
function $setColeccion_0(this$static, coleccion){
  this$static.Coleccion = coleccion;
}

function $setDescription_0(this$static, description){
  this$static.Description = description;
}

function $setId_0(this$static, id_0){
  this$static.Id = id_0;
}

function $setListaS(this$static, listaS){
  this$static.ListaS = listaS;
}

function $setName_0(this$static, name_0){
  this$static.Name = name_0;
}

function $setOperational(this$static, operational){
  this$static.Operational = operational;
}

function GrammarJSON(){
  this.ListaS = new ArrayList;
}

defineClass(66, 1, {66:1, 3:1}, GrammarJSON);
var Lfdi_ucm_server_interconect_model_GrammarJSON_2_classLit = createForClass('fdi.ucm.server.interconect.model', 'GrammarJSON', 66);
function $setId_1(this$static, id_0){
  this$static.Id = id_0;
}

function $setOperationalValueTypeId(this$static, operationalValueTypeId){
  this$static.OperationalValueTypeId = operationalValueTypeId;
}

function $setValue(this$static, value_0){
  this$static.Value = value_0;
}

function OperationalValueJSON(){
  this.Value = null;
  this.OperationalValueTypeId = null;
}

defineClass(102, 1, {102:1, 3:1}, OperationalValueJSON);
var Lfdi_ucm_server_interconect_model_OperationalValueJSON_2_classLit = createForClass('fdi.ucm.server.interconect.model', 'OperationalValueJSON', 102);
function $setDefault(this$static, default1){
  this$static.Default = default1;
}

function $setId_2(this$static, id_0){
  this$static.Id = id_0;
}

function $setName_1(this$static, name_0){
  this$static.Name = name_0;
}

function $setView(this$static, view){
  this$static.View = view;
}

function OperationalValueTypeJSON(){
  this.Default = null;
  this.Name = null;
}

defineClass(38, 1, {38:1, 3:1}, OperationalValueTypeJSON);
var Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2_classLit = createForClass('fdi.ucm.server.interconect.model', 'OperationalValueTypeJSON', 38);
function $setBrowseable(this$static, browseable){
  this$static.Browseable = browseable;
}

function $setClaseOf(this$static, claseOf){
  this$static.ClaseOf = claseOf;
}

function $setElementId(this$static, elementId){
  this$static.ElementId = elementId;
}

function $setExtended(this$static, extended){
  this$static.Extended = extended;
}

function $setFather(this$static, father){
  this$static.Father = father;
}

function $setFiltro(this$static, filtro){
  this$static.Filtro = filtro;
}

function $setId_3(this$static, id_0){
  this$static.Id = id_0;
}

function $setMultivalued(this$static, multivalued){
  this$static.Multivalued = multivalued;
}

function $setName_2(this$static, name_0){
  this$static.Name = name_0;
}

function $setOperationalValues_0(this$static, operationalValues){
  this$static.OperationalValues = operationalValues;
}

function $setSelected(this$static, selected){
  this$static.Selected = selected;
}

function $setSelectedValue(this$static, selectedValue){
  this$static.SelectedValue = selectedValue;
}

function $setShows(this$static, shows){
  this$static.Shows = shows;
}

function $setSons(this$static, sons){
  this$static.Sons = sons;
}

function $setURLValue(this$static, uRLValue){
  this$static.URLValue = uRLValue;
}

function $setValue_0(this$static, value_0){
  this$static.Value = value_0;
}

function StructureJSON(){
  this.Sons = new ArrayList;
  this.Sons = new ArrayList;
  this.Id = new ArrayList;
  this.Name = 'unknown';
  this.Shows = new ArrayList;
  this.Multivalued = false;
  this.Browseable = false;
  this.ClaseOf = valueOf_1({l:0, m:0, h:0});
  this.Selected = false;
  this.Filtro = false;
  this.Value = '';
  this.OperationalValues = new ArrayList;
  this.TypeOfStructure = ($clinit_StructureJSON$TypeOfStructureEnum() , Basic);
  this.Extended = false;
  this.ElementId = valueOf_1({l:0, m:0, h:0});
  this.SelectedValue = false;
  this.Father = valueOf_1({l:0, m:0, h:0});
  this.URLValue = '';
}

defineClass(15, 1, {15:1, 3:1}, StructureJSON);
_.Browseable = false;
_.Extended = false;
_.Filtro = false;
_.Multivalued = false;
_.Selected = false;
_.SelectedValue = false;
var Lfdi_ucm_server_interconect_model_StructureJSON_2_classLit = createForClass('fdi.ucm.server.interconect.model', 'StructureJSON', 15);
function $clinit_StructureJSON$TypeOfStructureEnum(){
  $clinit_StructureJSON$TypeOfStructureEnum = emptyMethod;
  Text_0 = new StructureJSON$TypeOfStructureEnum('Text', 0);
  Resource = new StructureJSON$TypeOfStructureEnum('Resource', 1);
  Link_0 = new StructureJSON$TypeOfStructureEnum('Link', 2);
  Basic = new StructureJSON$TypeOfStructureEnum('Basic', 3);
}

function StructureJSON$TypeOfStructureEnum(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_StructureJSON$TypeOfStructureEnum();
  return initValues(getClassLiteralForArray(Lfdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_2_classLit, 1), $intern_2, 54, 0, [Text_0, Resource, Link_0, Basic]);
}

defineClass(54, 4, {54:1, 3:1, 6:1, 4:1}, StructureJSON$TypeOfStructureEnum);
var Basic, Link_0, Resource, Text_0;
var Lfdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_2_classLit = createForEnum('fdi.ucm.server.interconect.model', 'StructureJSON/TypeOfStructureEnum', 54, values_9);
function $clinit_StructureJSON$TypeOfStructureEnum$Map(){
  $clinit_StructureJSON$TypeOfStructureEnum$Map = emptyMethod;
  $MAP = createValueOfMap(($clinit_StructureJSON$TypeOfStructureEnum() , initValues(getClassLiteralForArray(Lfdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_2_classLit, 1), $intern_2, 54, 0, [Text_0, Resource, Link_0, Basic])));
}

var $MAP;
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(91, 1, {});
_.toString$ = function toString_15(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 91);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(137, 17, $intern_4, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 137);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(82, 17, $intern_4, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 82);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_1 = new Boolean_0(false);
  TRUE_1 = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(63, 1, {3:1, 63:1, 6:1}, Boolean_0);
_.equals$ = function equals_7(o){
  return instanceOf(o, 63) && dynamicCast(o, 63).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_9(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_16(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_1, TRUE_1;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 63);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(62, 17, $intern_4, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 62);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = __substr(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = __substr(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = maxDigitsForRadix[10];
  radixPower = fromInt(maxDigitsRadixPower[10]);
  minValue = neg(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt(s.substr(0, head), 10));
    s = __substr(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt(s.substr(0, maxDigits), 10);
    s = __substr(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (lt(toReturn, minValue)) {
        throw new NumberFormatException('For input string: "' + orig + '"');
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub_0(toReturn, fromInt(head));
  }
  if (gt(toReturn, {l:0, m:0, h:0})) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, {l:0, m:0, h:0})) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

defineClass(83, 1, {3:1, 83:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 83);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(30, 83, {3:1, 6:1, 30:1, 83:1}, Double);
_.equals$ = function equals_8(o){
  return instanceOf(o, 30) && dynamicCast(o, 30).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_10(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_18(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 30);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(58, 17, $intern_4, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 58);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(51, 17, $intern_4, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 51);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(69, 17, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 69);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf_0(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(57, 83, {3:1, 6:1, 57:1, 83:1}, Integer);
_.equals$ = function equals_9(o){
  return instanceOf(o, 57) && dynamicCast(o, 57).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return this.value_0;
}
;
_.toString$ = function toString_19(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 57);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_2, 57, 256, 0, 1);
}

var boxedValues_0;
function $equals(this$static, o){
  return instanceOf(o, 39) && eq(dynamicCast(o, 39).value_0, this$static.value_0);
}

function Long(value_0){
  this.value_0 = value_0;
}

function valueOf_1(i){
  var rebase, result;
  if (gt(i, {l:4194175, m:$intern_14, h:$intern_15}) && lt(i, {l:128, m:0, h:0})) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_1)[rebase];
    !result && (result = boxedValues_1[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(39, 83, {3:1, 6:1, 39:1, 83:1}, Long);
_.equals$ = function equals_10(o){
  return $equals(this, o);
}
;
_.hashCode$ = function hashCode_12(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_20(){
  return '' + toString_11(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 39);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Long_2_classLit, $intern_2, 39, 256, 0, 1);
}

var boxedValues_1;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0){
  return x_0 < 5?x_0:5;
}

function pow_0(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(46, 17, $intern_4, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 46);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_2, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(I_classLit, $intern_2, 0, 37, 7, 1);
  maxLengthForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_2, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(J_classLit, $intern_2, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int(pow_0(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div({l:$intern_14, m:$intern_14, h:524287}, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException.call(this, message);
}

defineClass(36, 58, $intern_4, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 36);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(52, 1, {3:1, 52:1}, StackTraceElement);
_.equals$ = function equals_11(other){
  var st;
  if (instanceOf(other, 52)) {
    st = dynamicCast(other, 52);
    return this.lineNumber == st.lineNumber && equals_22(this.methodName, st.methodName) && equals_22(this.className_0, st.className_0) && equals_22(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_19(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf_0(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_21(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 52);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_2, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_21) {
    hiSurrogate = 55296 + (codePoint - $intern_21 >> 10 & 1023) & $intern_6;
    loSurrogate = 56320 + (codePoint - $intern_21 & 1023) & $intern_6;
    return valueOf_2(hiSurrogate) + valueOf_2(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_6);
  }
}

function valueOf_2(x_0){
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(40, 91, {390:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 40);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(35, 17, $intern_4, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 35);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkNotNull(c);
  changed = false;
  for (e$iterator = new AbstractHashMap$EntrySetIterator(c.this$01); $hasNext(e$iterator);) {
    e = (checkStructuralChange(e$iterator.this$01, e$iterator) , checkCriticalElement($hasNext(e$iterator)) , e$iterator.last = e$iterator.current , dynamicCast(e$iterator.current.next_0(), 10));
    changed = changed | ($addNode(this$static, e, this$static.tail.prev, this$static.tail) , true);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(368, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_8(o){
  return $advanceToFind(this, o, true);
}
;
_.toString$ = function toString_22(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 368);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static)).this$01); $hasNext(iter);) {
    entry = (checkStructuralChange(iter.this$01, iter) , checkCriticalElement($hasNext(iter)) , iter.last = iter.current , dynamicCast(iter.current.next_0(), 10));
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        $remove_6(iter);
      }
      return entry;
    }
  }
  return null;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(367, 1, {61:1});
_.equals$ = function equals_12(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 61)) {
    return false;
  }
  otherMap = dynamicCast(obj, 61);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 10);
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_0 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_20(new AbstractHashMap$EntrySet(this));
}
;
_.isEmpty = function isEmpty_0(){
  return this.size_0 == 0;
}
;
_.put = function put(key, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_2 = function remove_9(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_1(){
  return (new AbstractHashMap$EntrySet(this)).this$01.size_0;
}
;
_.toString$ = function toString_23(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 10));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_3(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_3(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 367);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_1(this$static, key){
  return isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key) === undefined);
}

function $put_0(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key, value_0);
}

function $remove_5(this$static, key){
  return isJavaString(key)?key == null?$remove_10(this$static.hashCodeMap, null):this$static.stringMap.remove_4(key):$remove_10(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(134, 367, {61:1});
_.entrySet_0 = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_0 = function get_2(key){
  return $get_1(this, key);
}
;
_.put = function put_0(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_2 = function remove_10(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 134);
defineClass(369, 368, $intern_28);
_.equals$ = function equals_13(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 72)) {
    return false;
  }
  other = dynamicCast(o, 72);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_15(){
  return hashCode_20(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 369);
function $contains(this$static, o){
  if (instanceOf(o, 10)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 10));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(53, 369, $intern_28, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_3(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_11(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 10).getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 53);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_1(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , dynamicCast(this$static.current.next_0(), 10);
}

function $remove_6(this$static){
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(74, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_1(){
  return $hasNext(this);
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_0 = function remove_12(){
  $remove_6(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 74);
function $equals_1(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 11)) {
    return false;
  }
  other = dynamicCast(o, 11);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

defineClass(370, 368, {11:1});
_.add_1 = function add_7(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_2 = function add_8(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_14(o){
  return $equals_1(this, o);
}
;
_.hashCode$ = function hashCode_16(){
  return hashCode_21(this);
}
;
_.iterator = function iterator_4(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_3 = function remove_13(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 370);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(12, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_3(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_1(this.last = this.i++);
}
;
_.remove_0 = function remove_14(){
  checkState(this.last != -1);
  this.this$01_0.remove_3(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 12);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(146, 12, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_1(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 146);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(108, 369, $intern_28, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_5(){
  return $iterator(this);
}
;
_.remove_1 = function remove_15(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_4(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 108);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(136, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_3(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_4(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_0 = function remove_16(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 136);
defineClass(135, 1, $intern_29);
_.equals$ = function equals_15(other){
  var entry;
  if (!instanceOf(other, 10)) {
    return false;
  }
  entry = dynamicCast(other, 10);
  return equals_22(this.key, entry.getKey()) && equals_22(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_17(){
  return hashCode_27(this.key) ^ hashCode_27(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_24(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 135);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(107, 135, $intern_29, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 107);
defineClass(371, 1, $intern_29);
_.equals$ = function equals_16(other){
  var entry;
  if (!instanceOf(other, 10)) {
    return false;
  }
  entry = dynamicCast(other, 10);
  return equals_22(this.getKey(), entry.getKey()) && equals_22(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_18(){
  return hashCode_27(this.getKey()) ^ hashCode_27(this.getValue());
}
;
_.toString$ = function toString_25(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 371);
function $get_2(this$static, index_0){
  var iter;
  iter = $listIterator(this$static, index_0);
  try {
    return checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 50)) {
      throw new IndexOutOfBoundsException_0("Can't get element " + index_0);
    }
     else 
      throw unwrap_5($e0);
  }
}

defineClass(388, 370, {11:1});
_.add_1 = function add_9(index_0, element){
  var iter;
  iter = $listIterator(this, index_0);
  $addNode(iter.this$01, element, iter.currentNode.prev, iter.currentNode);
  ++iter.currentIndex;
  iter.lastNode = null;
}
;
_.get_1 = function get_3(index_0){
  return $get_2(this, index_0);
}
;
_.iterator = function iterator_6(){
  return $listIterator(this, 0);
}
;
_.remove_3 = function remove_17(index_0){
  var iter, old;
  iter = $listIterator(this, index_0);
  try {
    old = (checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0);
    $remove_12(iter);
    return old;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 50)) {
      throw new IndexOutOfBoundsException_0("Can't remove element " + index_0);
    }
     else 
      throw unwrap_5($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 388);
function $add_4(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_3(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_22(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_7(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_8(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_3(i);
  return true;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(14, 370, $intern_30, ArrayList);
_.add_1 = function add_10(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_2 = function add_11(o){
  return $add_4(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_1 = function get_4(index_0){
  return $get_3(this, index_0);
}
;
_.isEmpty = function isEmpty_1(){
  return this.array.length == 0;
}
;
_.remove_3 = function remove_18(index_0){
  return $remove_7(this, index_0);
}
;
_.remove_1 = function remove_19(o){
  return $remove_8(this, o);
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 14);
function hashCode_19(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_20(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_21(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 89)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(138, 370, $intern_30, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_1 = function get_5(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_7(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 138);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(139, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_4(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_5(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_0 = function remove_20(){
  throw new IllegalStateException;
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 139);
function Collections$UnmodifiableCollection(coll){
  this.coll = coll;
}

defineClass(109, 1, {});
_.add_2 = function add_12(o){
  throw new UnsupportedOperationException;
}
;
_.iterator = function iterator_8(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove_1 = function remove_21(o){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_7(){
  return this.coll.size_1();
}
;
_.toString$ = function toString_26(){
  return this.coll.toString$();
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 109);
function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(111, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext = function hasNext_5(){
  return this.it.hasNext();
}
;
_.next_0 = function next_6(){
  return this.it.next_0();
}
;
_.remove_0 = function remove_22(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 111);
function Collections$UnmodifiableList(list){
  Collections$UnmodifiableCollection.call(this, list);
  this.list = list;
}

defineClass(110, 109, {11:1}, Collections$UnmodifiableList);
_.equals$ = function equals_17(o){
  return this.list.equals$(o);
}
;
_.get_1 = function get_6(index_0){
  return this.list.get_1(index_0);
}
;
_.hashCode$ = function hashCode_22(){
  return this.list.hashCode$();
}
;
_.isEmpty = function isEmpty_2(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 110);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(112, 111, {}, Collections$UnmodifiableListIterator);
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 112);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(140, 1, {61:1}, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_0(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals$ = function equals_18(o){
  return this.map_0.equals$(o);
}
;
_.get_0 = function get_7(key){
  return this.map_0.get_0(key);
}
;
_.hashCode$ = function hashCode_23(){
  return this.map_0.hashCode$();
}
;
_.isEmpty = function isEmpty_3(){
  return this.map_0.isEmpty();
}
;
_.put = function put_1(key, value_0){
  throw new UnsupportedOperationException;
}
;
_.remove_2 = function remove_23(key){
  throw new UnsupportedOperationException;
}
;
_.size_1 = function size_8(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_27(){
  return this.map_0.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 140);
defineClass(141, 109, $intern_28);
_.equals$ = function equals_19(o){
  return this.coll.equals$(o);
}
;
_.hashCode$ = function hashCode_24(){
  return this.coll.hashCode$();
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 141);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  Collections$UnmodifiableCollection.call(this, s);
}

defineClass(142, 141, $intern_28, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_9(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 142);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(145, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.hasNext = function hasNext_6(){
  return this.val$it2.hasNext();
}
;
_.next_0 = function next_7(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(dynamicCast(this.val$it2.next_0(), 10));
}
;
_.remove_0 = function remove_24(){
  throw new UnsupportedOperationException;
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 145);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(143, 1, $intern_29, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals$ = function equals_20(o){
  return this.entry.equals$(o);
}
;
_.getKey = function getKey_0(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_0(){
  return this.entry.getValue();
}
;
_.hashCode$ = function hashCode_25(){
  return this.entry.hashCode$();
}
;
_.setValue = function setValue_0(value_0){
  throw new UnsupportedOperationException;
}
;
_.toString$ = function toString_28(){
  return this.entry.toString$();
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 143);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(144, 110, {11:1, 89:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 144);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(265, 17, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 265);
function $toString_4(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this$static.jsdate.getDay()] + ' ' + MONTHS[this$static.jsdate.getMonth()] + ' ' + padTwo(this$static.jsdate.getDate()) + ' ' + padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.jsdate.getFullYear();
}

function Date_0(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(88, 1, {3:1, 6:1, 88:1}, Date_0);
_.equals$ = function equals_21(obj){
  return instanceOf(obj, 88) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 88).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_26(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_29(){
  return $toString_4(this);
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 88);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_2(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(28, 134, {3:1, 61:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 28);
function $add_5(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_9(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(99, 369, {3:1, 72:1}, HashSet);
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_4(){
  return this.map_0.size_0 == 0;
}
;
_.iterator = function iterator_10(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_1 = function remove_25(o){
  return $remove_9(this, o);
}
;
_.size_1 = function size_9(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_30(){
  return $toString_2(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 99);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_10(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_2(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(114, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 114);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_2, 10, 0, 0, 1);
}

defineClass(158, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_7(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_8(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_0 = function remove_26(){
  checkState(!!this.lastEntry);
  $remove_10(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 158);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(156, 114, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_2(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 156);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(157, 14, $intern_30, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_3 = function remove_27(index_0){
  var removed;
  return removed = dynamicCast($remove_7(this, index_0), 10) , $remove_10(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 157);
function InternalJsMapFactory(){
}

defineClass(153, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 153);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(155, 153, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 155);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(154, 153, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 154);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_2(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_11(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_2(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(92, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_2 = function get_8(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put_0 = function put_2(key, value_0){
  return $put_2(this, key, value_0);
}
;
_.remove_4 = function remove_28(key){
  return $remove_11(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 92);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(150, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_8(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_9(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_0 = function remove_29(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 150);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(113, 371, $intern_29, InternalJsStringMap$2);
_.getKey = function getKey_1(){
  return this.val$key2;
}
;
_.getValue = function getValue_1(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_1(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 113);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(147, 92, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_2(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_9(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_3(key, value_0){
  return $put_2(this, ':' + key, value_0);
}
;
_.remove_4 = function remove_30(key){
  return $remove_11(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 147);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(149, 14, $intern_30, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_3 = function remove_31(index_0){
  var removed;
  return removed = dynamicCast($remove_7(this, index_0), 10) , $remove_11(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 149);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(148, 92, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 148);
function $$init(this$static){
  this$static.header = new LinkedList$Node;
  this$static.tail = new LinkedList$Node;
}

function $addLast(this$static, o){
  $addNode(this$static, o, this$static.tail.prev, this$static.tail);
}

function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next = next;
  next.prev = prev.next = node;
  ++this$static.size_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next;
    for (i = 0; i < index_0; ++i) {
      node = node.next;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function $reset_0(this$static){
  this$static.header.next = this$static.tail;
  this$static.tail.prev = this$static.header;
  this$static.header.prev = this$static.tail.next = null;
  this$static.size_0 = 0;
}

function LinkedList(){
  $$init(this);
  $reset_0(this);
}

function LinkedList_0(c){
  $$init(this);
  $reset_0(this);
  $addAll(this, c);
}

defineClass(49, 388, {3:1, 11:1}, LinkedList, LinkedList_0);
_.add_2 = function add_13(o){
  return $addNode(this, o, this.tail.prev, this.tail) , true;
}
;
_.listIterator_0 = function listIterator_4(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_10(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 49);
function $remove_12(this$static){
  var nextNode;
  checkState(!!this$static.lastNode);
  nextNode = this$static.lastNode.next;
  $removeNode(this$static.this$01, this$static.lastNode);
  this$static.currentNode == this$static.lastNode?(this$static.currentNode = nextNode):--this$static.currentIndex;
  this$static.lastNode = null;
}

function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(257, 1, {}, LinkedList$ListIteratorImpl);
_.hasNext = function hasNext_9(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_2(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_0 = function next_10(){
  return checkCriticalElement(this.currentNode != this.this$01.tail) , this.lastNode = this.currentNode , this.currentNode = this.currentNode.next , ++this.currentIndex , this.lastNode.value_0;
}
;
_.previous = function previous_3(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_0 = function remove_32(){
  $remove_12(this);
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 257);
function LinkedList$Node(){
}

defineClass(100, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 100);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(50, 17, {3:1, 13:1, 7:1, 50:1}, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 50);
function equals_22(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_27(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $clinit_Level(){
  $clinit_Level = emptyMethod;
  ALL = new Level$LevelAll;
  CONFIG = new Level$LevelConfig;
  FINE = new Level$LevelFine;
  FINER = new Level$LevelFiner;
  FINEST = new Level$LevelFinest;
  INFO = new Level$LevelInfo;
  OFF = new Level$LevelOff;
  SEVERE = new Level$LevelSevere;
  WARNING = new Level$LevelWarning;
}

defineClass(375, 1, $intern_2);
_.getName = function getName_0(){
  return 'DUMMY';
}
;
_.intValue = function intValue(){
  return -1;
}
;
_.toString$ = function toString_31(){
  return this.getName();
}
;
var ALL, CONFIG, FINE, FINER, FINEST, INFO, OFF, SEVERE, WARNING;
var Ljava_util_logging_Level_2_classLit = createForClass('java.util.logging', 'Level', 375);
function Level$LevelAll(){
}

defineClass(162, 375, $intern_2, Level$LevelAll);
_.getName = function getName_1(){
  return 'ALL';
}
;
_.intValue = function intValue_0(){
  return -2147483648;
}
;
var Ljava_util_logging_Level$LevelAll_2_classLit = createForClass('java.util.logging', 'Level/LevelAll', 162);
function Level$LevelConfig(){
}

defineClass(163, 375, $intern_2, Level$LevelConfig);
_.getName = function getName_2(){
  return 'CONFIG';
}
;
_.intValue = function intValue_1(){
  return 700;
}
;
var Ljava_util_logging_Level$LevelConfig_2_classLit = createForClass('java.util.logging', 'Level/LevelConfig', 163);
function Level$LevelFine(){
}

defineClass(164, 375, $intern_2, Level$LevelFine);
_.getName = function getName_3(){
  return 'FINE';
}
;
_.intValue = function intValue_2(){
  return 500;
}
;
var Ljava_util_logging_Level$LevelFine_2_classLit = createForClass('java.util.logging', 'Level/LevelFine', 164);
function Level$LevelFiner(){
}

defineClass(165, 375, $intern_2, Level$LevelFiner);
_.getName = function getName_4(){
  return 'FINER';
}
;
_.intValue = function intValue_3(){
  return 400;
}
;
var Ljava_util_logging_Level$LevelFiner_2_classLit = createForClass('java.util.logging', 'Level/LevelFiner', 165);
function Level$LevelFinest(){
}

defineClass(166, 375, $intern_2, Level$LevelFinest);
_.getName = function getName_5(){
  return 'FINEST';
}
;
_.intValue = function intValue_4(){
  return 300;
}
;
var Ljava_util_logging_Level$LevelFinest_2_classLit = createForClass('java.util.logging', 'Level/LevelFinest', 166);
function Level$LevelInfo(){
}

defineClass(167, 375, $intern_2, Level$LevelInfo);
_.getName = function getName_6(){
  return 'INFO';
}
;
_.intValue = function intValue_5(){
  return 800;
}
;
var Ljava_util_logging_Level$LevelInfo_2_classLit = createForClass('java.util.logging', 'Level/LevelInfo', 167);
function Level$LevelOff(){
}

defineClass(168, 375, $intern_2, Level$LevelOff);
_.getName = function getName_7(){
  return 'OFF';
}
;
_.intValue = function intValue_6(){
  return $intern_0;
}
;
var Ljava_util_logging_Level$LevelOff_2_classLit = createForClass('java.util.logging', 'Level/LevelOff', 168);
function Level$LevelSevere(){
}

defineClass(169, 375, $intern_2, Level$LevelSevere);
_.getName = function getName_8(){
  return 'SEVERE';
}
;
_.intValue = function intValue_7(){
  return 1000;
}
;
var Ljava_util_logging_Level$LevelSevere_2_classLit = createForClass('java.util.logging', 'Level/LevelSevere', 169);
function Level$LevelWarning(){
}

defineClass(170, 375, $intern_2, Level$LevelWarning);
_.getName = function getName_9(){
  return 'WARNING';
}
;
_.intValue = function intValue_8(){
  return 900;
}
;
var Ljava_util_logging_Level$LevelWarning_2_classLit = createForClass('java.util.logging', 'Level/LevelWarning', 170);
function $addLoggerImpl(this$static, logger){
  $putStringValue(this$static.loggerMap, logger.impl.name_0, logger);
}

function $ensureLogger(this$static, name_0){
  var logger, newLogger, name_1, parentName;
  logger = dynamicCast($getStringValue(this$static.loggerMap, name_0), 84);
  if (!logger) {
    newLogger = new Logger(name_0);
    name_1 = newLogger.impl.name_0;
    parentName = __substr(name_1, 0, max_0(0, $lastIndexOf(name_1, fromCodePoint(46))));
    $setParent_1(newLogger, $ensureLogger(this$static, parentName));
    $putStringValue(this$static.loggerMap, newLogger.impl.name_0, newLogger);
    return newLogger;
  }
  return logger;
}

function LogManager(){
  this.loggerMap = new HashMap;
}

function getLogManager(){
  var rootLogger;
  if (!singleton_0) {
    singleton_0 = new LogManager;
    rootLogger = new Logger('');
    $setLevel_1(rootLogger, ($clinit_Level() , INFO));
    $addLoggerImpl(singleton_0, rootLogger);
  }
  return singleton_0;
}

defineClass(152, 1, {}, LogManager);
var singleton_0;
var Ljava_util_logging_LogManager_2_classLit = createForClass('java.util.logging', 'LogManager', 152);
function $setLoggerName(this$static, newName){
  this$static.loggerName = newName;
}

function LogRecord(msg){
  this.msg = msg;
  this.millis = fromDouble(now_1());
}

defineClass(250, 1, $intern_2, LogRecord);
_.loggerName = '';
_.millis = {l:0, m:0, h:0};
_.thrown = null;
var Ljava_util_logging_LogRecord_2_classLit = createForClass('java.util.logging', 'LogRecord', 250);
function $log_1(this$static, msg, thrown){
  $log(this$static.impl, msg, thrown);
}

function $setLevel_1(this$static, newLevel){
  $setLevel_0(this$static.impl, newLevel);
}

function $setParent_1(this$static, newParent){
  $setParent(this$static.impl, newParent);
}

function Logger(name_0){
  this.impl = new LoggerImplSevere;
  $setName(this.impl, name_0);
}

function getLogger(name_0){
  new LoggerImplSevere;
  return $ensureLogger(getLogManager(), name_0);
}

defineClass(84, 1, {84:1}, Logger);
var Ljava_util_logging_Logger_2_classLit = createForClass('java.util.logging', 'Logger', 84);
function $CreaLosPaneles(this$static){
  var PanelCentral, PanelImgTra2, PanelLabelTag, PanelMetaUsed, PanelRemovedT, SP;
  SP = new ScrollPanel;
  this$static.PanelPrincipal.add_0(SP);
  PanelCentral = new HorizontalPanel;
  $add_1(SP, PanelCentral);
  ($clinit_DOM() , PanelCentral.element).style['height'] = '100%';
  PanelLabelTag = new VerticalPanel;
  $add_0(PanelCentral, PanelLabelTag);
  PanelLabelTag.element.style['width'] = '100%';
  PanelLabelTag.element.style['height'] = '100%';
  this$static.PanelPhrases = new VerticalPanel;
  $add_2(PanelLabelTag, this$static.PanelPhrases);
  $setStyleName(this$static.PanelPhrases, 'panelPhrases', true);
  $setSize(this$static.PanelPhrases, '100%', '100%');
  this$static.LoadPH = new Image_1('Loader.gif');
  this$static.PanelAuto = new VerticalPanel;
  $add_2(PanelLabelTag, this$static.PanelAuto);
  $setStyleName(this$static.PanelAuto, 'panelAuto', true);
  $setSize(this$static.PanelAuto, '100%', '100%');
  this$static.LoadAUTO = new Image_1('Loader.gif');
  this$static.PanelManual = new VerticalPanel;
  $add_2(PanelLabelTag, this$static.PanelManual);
  $setStyleName(this$static.PanelManual, 'panelManual', true);
  $setSize(this$static.PanelManual, '100%', '100%');
  this$static.LoadMAN = new Image_1('Loader.gif');
  PanelRemovedT = new HorizontalPanel;
  $add_2(PanelLabelTag, PanelRemovedT);
  setStyleName(PanelRemovedT.element, 'panelRemoved', true);
  PanelRemovedT.element.style['width'] = '100%';
  PanelRemovedT.element.style['height'] = '100%';
  this$static.PanelRemDocu = new VerticalPanel;
  $add_0(PanelRemovedT, this$static.PanelRemDocu);
  $setStyleName(this$static.PanelRemDocu, 'panelRemD', true);
  $setSize(this$static.PanelRemDocu, '100%', '100%');
  this$static.PanelRemGlob = new VerticalPanel;
  $add_0(PanelRemovedT, this$static.PanelRemGlob);
  $setStyleName(this$static.PanelRemGlob, 'panelRemI', true);
  $setSize(this$static.PanelRemGlob, '100%', '100%');
  this$static.LoadREMDocu = new Image_1('Loader.gif');
  this$static.LoadREMGlob = new Image_1('Loader.gif');
  PanelMetaUsed = new VerticalPanel;
  $add_0(PanelCentral, PanelMetaUsed);
  PanelMetaUsed.element.style['height'] = '100%';
  this$static.PanelMetamap = new VerticalPanel;
  $add_2(PanelMetaUsed, this$static.PanelMetamap);
  $setStyleName(this$static.PanelMetamap, 'panelMetamap', true);
  $setHeight(this$static.PanelMetamap, '100%');
  this$static.LoadMeta = new Image_1('Loader.gif');
  this$static.PanelUsed = new VerticalPanel;
  $add_2(PanelMetaUsed, this$static.PanelUsed);
  $setStyleName(this$static.PanelUsed, 'panelUses', true);
  $setHeight(this$static.PanelUsed, '100%');
  this$static.LoadUsed = new Image_1('Loader.gif');
  this$static.PanelImgTra = new VerticalPanel;
  $add_0(PanelCentral, this$static.PanelImgTra);
  $setSize(this$static.PanelImgTra, '100%', '100%');
  PanelImgTra2 = new VerticalPanel;
  $add_2(this$static.PanelImgTra, PanelImgTra2);
  PanelImgTra2.element.style['width'] = '100%';
  this$static.PanelImg = new VerticalPanel;
  $add_2(PanelImgTra2, this$static.PanelImg);
  $setStyleName(this$static.PanelImg, 'panelImages', true);
  this$static.LoadIMG = new Image_1('Loader.gif');
  this$static.PanelTra = new VerticalPanel;
  $add_2(PanelImgTra2, this$static.PanelTra);
  $setStyleName(this$static.PanelTra, 'panelTraduct', true);
  this$static.LoadTra = new Image_1('Loader.gif');
  $clear(this$static.PanelPhrases);
  $add_2(this$static.PanelPhrases, this$static.LoadPH);
  $clear(this$static.PanelAuto);
  $add_2(this$static.PanelAuto, this$static.LoadAUTO);
  $clear(this$static.PanelManual);
  $add_2(this$static.PanelManual, this$static.LoadMAN);
  $clear(this$static.PanelMetamap);
  $add_2(this$static.PanelMetamap, this$static.LoadMeta);
  $clear(this$static.PanelUsed);
  $add_2(this$static.PanelUsed, this$static.LoadUsed);
  $clear(this$static.PanelImg);
  $add_2(this$static.PanelImg, this$static.LoadIMG);
  $clear(this$static.PanelTra);
  $add_2(this$static.PanelTra, this$static.LoadTra);
  $clear(this$static.PanelRemDocu);
  $add_2(this$static.PanelRemDocu, this$static.LoadREMDocu);
  $clear(this$static.PanelRemGlob);
  $add_2(this$static.PanelRemGlob, this$static.LoadREMGlob);
  $processActualDocument(this$static);
}

function $ProcesaLabelRecuperar(this$static, recuperar_){
  if (recuperar_) {
    $setText(this$static.DeleteLabel, $get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'recoverlabel'));
    $setVisible(this$static.DeleteDocumentButton, false);
    $setVisible(this$static.RecoverDocumentButton, true);
  }
   else {
    $setText(this$static.DeleteLabel, $get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabel'));
    $setVisible(this$static.DeleteDocumentButton, true);
    $setVisible(this$static.RecoverDocumentButton, false);
  }
}

function $gotContext(this$static, listaS, contextId){
  var S, structterJSON, structterJSON$iterator;
  for (structterJSON$iterator = new AbstractList$IteratorImpl(listaS); structterJSON$iterator.i < structterJSON$iterator.this$01_0.size_1();) {
    structterJSON = (checkCriticalElement(structterJSON$iterator.i < structterJSON$iterator.this$01_0.size_1()) , dynamicCast(structterJSON$iterator.this$01_0.get_1(structterJSON$iterator.last = structterJSON$iterator.i++), 15));
    if ($equals(dynamicCast($get_3(structterJSON.Id, 0), 39), contextId))
      return structterJSON;
    else {
      S = $gotContext(this$static, structterJSON.Sons, contextId);
      if (S)
        return S;
    }
  }
  return null;
}

function $persistJS(this$static){
  $toString(this$static.Documento);
  $setVariableBase2(this$static.Documento, this$static.RandomIdVars);
}

function $printImage(this$static){
  $setUrl_1(this$static.Ima, ($clinit_UriUtils() , new SafeUriString(dynamicCast($get_2(this$static.ImagenesBien, this$static.ImagenActual), 15).Value)));
  this$static.ImagenActual < this$static.ImagenesBien.size_0 - 1?$setEnabled(this$static.AlanteIma, true):$setEnabled(this$static.AlanteIma, false);
  this$static.ImagenActual > 0?$setEnabled(this$static.AtrasIma, true):$setEnabled(this$static.AtrasIma, false);
  $setText(this$static.LabelImage, this$static.ImagenActual + 1 + '/' + this$static.ImagenesBien.size_0);
}

function $procesaSentenciasPhrases(this$static, borrado_){
  var DP, F, Findings, PP, PanelSente, SPanel, Sentence, Vertical, frase, heightD, i, j, labe, palabraS, palabraS$index, palabraS$max, palabras, palabrasS, posi, posiA;
  $clear(this$static.PanelPhrases);
  DP = new VerticalPanel;
  ($clinit_DOM() , DP.element).style['width'] = '100%';
  $add_2(this$static.PanelPhrases, DP);
  Findings = new Label_0($get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'DocumentFindings'));
  setStyleName(Findings.element, 'boldData', true);
  $add_2(DP, Findings);
  SPanel = new ScrollPanel;
  setStyleName(SPanel.element, 'scrollPharese', true);
  $add_2(DP, SPanel);
  Vertical = new VerticalPanel;
  $add_1(SPanel, Vertical);
  this$static.posicionTabla = new HashMap;
  this$static.posicionTablaI = new HashMap;
  this$static.ActualSelected = new LinkedList;
  posi = 0;
  for (i = 0; i < this$static.UteranciasBien.size_0; i++) {
    Sentence = dynamicCast($get_2(this$static.UteranciasBien, i), 15).Value;
    PanelSente = new HorizontalPanel;
    $setPropertyInt(PanelSente.table, 'cellSpacing', 5);
    $add_2(Vertical, PanelSente);
    palabras = new LinkedList;
    frase = $trim(Sentence);
    frase = $replace(frase, ',', ', ');
    frase = $replace(frase, ' ,', ',');
    frase = $replace(frase, ';', '; ');
    frase = $replace(frase, ' ;', ';');
    frase = $replace(frase, '/', '/ ');
    frase = $replace(frase, ' /', '/');
    frase = $replace(frase, '-', '- ');
    frase = $replace(frase, ' -', '-');
    frase = $replace(frase, '  ', ' ');
    palabrasS = $split(frase, ' ', 0);
    for (palabraS$index = 0 , palabraS$max = palabrasS.length; palabraS$index < palabraS$max; ++palabraS$index) {
      palabraS = palabrasS[palabraS$index];
      !$trim(palabraS).length || ($addNode(palabras, palabraS, palabras.tail.prev, palabras.tail) , true);
    }
    for (j = 0; j < palabras.size_0; j++) {
      posiA = new Integer(posi++);
      labe = new Label_0(dynamicCastToString($get_2(palabras, j)));
      $add_0(PanelSente, labe);
      $put_0(this$static.posicionTabla, labe, posiA);
      $put_0(this$static.posicionTablaI, posiA, labe);
      !borrado_ && $addDomHandler(labe, new CompositeDocumentEditionProto$6(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
    }
  }
  PP = $getPropertyInt($getElement(this$static.PanelPhrases), 'offsetHeight');
  F = $getPropertyInt(Findings.element, 'offsetHeight');
  heightD = PP - F;
  SPanel.element.style['height'] = heightD + 'px';
  $setWidth(SPanel, $getPropertyInt($getElement(this$static.PanelPhrases), 'offsetWidth') + 'px');
}

function $processActualDocument(this$static){
  var Deleted;
  if (this$static.DeleteBien.SelectedValue) {
    $ProcesaLabelRecuperar(this$static, true);
    $procesaSentenciasPhrases(this$static, true);
    $clear(this$static.PanelAuto);
    Deleted = new Label_0($get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabeldocument'));
    setStyleName(($clinit_DOM() , Deleted.element), 'labelDeleteDoc', true);
    $add_2(this$static.PanelAuto, Deleted);
    $clear(this$static.PanelManual);
    Deleted = new Label_0($get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabeldocument'));
    setStyleName(Deleted.element, 'labelDeleteDoc', true);
    $add_2(this$static.PanelManual, Deleted);
    $clear(this$static.PanelRemGlob);
    Deleted = new Label_0($get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabeldocument'));
    setStyleName(Deleted.element, 'labelDeleteDoc', true);
    $add_2(this$static.PanelRemGlob, Deleted);
    $clear(this$static.PanelRemDocu);
    Deleted = new Label_0($get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabeldocument'));
    setStyleName(Deleted.element, 'labelDeleteDoc', true);
    $add_2(this$static.PanelRemDocu, Deleted);
    $processImage(this$static);
  }
   else {
    $ProcesaLabelRecuperar(this$static, false);
    $procesaSentenciasPhrases(this$static, false);
    $processImage(this$static);
  }
}

function $processImage(this$static){
  var Botonera, P, PanelImages;
  $clear(this$static.PanelImg);
  PanelImages = new VerticalPanel;
  ($clinit_DOM() , PanelImages.element).style['width'] = '100&';
  PanelImages.element.style['height'] = '100%';
  $add_2(this$static.PanelImg, PanelImages);
  Botonera = new HorizontalPanel;
  $setPropertyInt(Botonera.table, 'cellSpacing', 3);
  Botonera.element.style['height'] = '60px';
  this$static.AlanteIma = new PushButton(new Image_1('img/forward.png'));
  this$static.AtrasIma = new PushButton(new Image_1('img/back.png'));
  $setEnabled(this$static.AlanteIma, false);
  $setEnabled(this$static.AtrasIma, false);
  $add_0(Botonera, this$static.AtrasIma);
  this$static.LabelImage = new Label_0('');
  $add_0(Botonera, this$static.LabelImage);
  $add_0(Botonera, this$static.AlanteIma);
  $addDomHandler(this$static.AlanteIma, new CompositeDocumentEditionProto$3(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $addDomHandler(this$static.AtrasIma, new CompositeDocumentEditionProto$4(this$static), (null , TYPE));
  P = new SimplePanel;
  P.setSize('100%', '100%');
  this$static.Ima = new Image_1('default.png');
  $setHeight(this$static.Ima, $getPropertyInt($getElement(this$static.PanelImgTra), 'offsetHeight') - 164 + 'px');
  $getPropertyInt($getElement(this$static.Ima), 'offsetHeight');
  $getPropertyInt($getElement(this$static.Ima), 'offsetWidth');
  $setStyleName(this$static.Ima, 'imageDoc', true);
  $addHandler_1(this$static.Ima, new CompositeDocumentEditionProto$5(this$static), (null , TYPE));
  this$static.ImagenActual = 0;
  this$static.ImagenesBien.size_0 > 0 && ($setUrl_0(this$static.Ima, dynamicCast($get_2(this$static.ImagenesBien, this$static.ImagenActual), 15).Value) , this$static.ImagenActual < this$static.ImagenesBien.size_0 - 1?$setEnabled(this$static.AlanteIma, true):$setEnabled(this$static.AlanteIma, false) , this$static.ImagenActual > 0?$setEnabled(this$static.AtrasIma, true):$setEnabled(this$static.AtrasIma, false) , $setText(this$static.LabelImage, this$static.ImagenActual + 1 + '/' + this$static.ImagenesBien.size_0));
  $add_1(P, this$static.Ima);
  $add_2(PanelImages, P);
  $add_2(PanelImages, Botonera);
}

function $setVariableBase2(documento2, randomIdVars2){
  var DocumentoJ, DocumentoJ_0;
  DocumentoJ = (DocumentoJ_0 = new JSONObject , $put(DocumentoJ_0, 'Documento', CreateDocIn(documento2.Documento)) , $put(DocumentoJ_0, 'Gramaticas', CreateGramIn(documento2.Gramaticas)) , DocumentoJ_0);
  setVariableBase3($toString_1(DocumentoJ), randomIdVars2);
  return DocumentoJ;
}

function $test(this$static, sS){
  var CUIBoo, DeleteElement, Errores, GSFin, Gr, Gr$iterator, ListPosition, ListSemantic, OperaValTyJSON, OperaValTyJSON$iterator, PositionsList, SSFin, SSPadre, SemanticList, SourceAutoBien, TermBien, ViewstructureJSON, ViewstructureJSON$iterator, ViewstructureJSON$iterator0, ViewstructureJSON$iterator1, ZonaBUsqueda, err, err$iterator, err$iterator0, structureJSON, structureJSON$iterator, structureJSON$iterator0, structureJSON$iterator1, structureJSON$iterator2, termElem, termElem$iterator;
  Errores = new ArrayList;
  ZonaBUsqueda = null;
  SSPadre = sS.Father;
  if (SSPadre) {
    SSFin = null;
    for (Gr$iterator = new AbstractList$IteratorImpl(this$static.Documento.Gramaticas); Gr$iterator.i < Gr$iterator.this$01_0.size_1();) {
      Gr = (checkCriticalElement(Gr$iterator.i < Gr$iterator.this$01_0.size_1()) , dynamicCast(Gr$iterator.this$01_0.get_1(Gr$iterator.last = Gr$iterator.i++), 66));
      SSFin = $gotContext(this$static, Gr.ListaS, SSPadre);
      if (SSFin)
        break;
    }
    !!SSFin && (ZonaBUsqueda = SSFin.Sons);
  }
   else {
    GSFin = null;
    for (Gr$iterator = new AbstractList$IteratorImpl(this$static.Documento.Gramaticas); Gr$iterator.i < Gr$iterator.this$01_0.size_1();) {
      Gr = (checkCriticalElement(Gr$iterator.i < Gr$iterator.this$01_0.size_1()) , dynamicCast(Gr$iterator.this$01_0.get_1(Gr$iterator.last = Gr$iterator.i++), 66));
      SSFin = $gotContext(this$static, Gr.ListaS, dynamicCast($get_3(sS.Id, 0), 39));
      if (SSFin) {
        GSFin = Gr;
        break;
      }
    }
    !!GSFin && (ZonaBUsqueda = GSFin.ListaS);
  }
  !ZonaBUsqueda && (setCheck(Errores.array, Errores.array.length, 'I cant found the context correct father') , true);
  sS.Multivalued || (setCheck(Errores.array, Errores.array.length, 'Term structure element should be multivalued') , true);
  sS.TypeOfStructure != ($clinit_StructureJSON$TypeOfStructureEnum() , Text_0) && (setCheck(Errores.array, Errores.array.length, 'Term structure element should be text type') , true);
  TermBien = false;
  SourceAutoBien = false;
  for (OperaValTyJSON$iterator = new AbstractList$IteratorImpl(sS.Shows); OperaValTyJSON$iterator.i < OperaValTyJSON$iterator.this$01_0.size_1();) {
    OperaValTyJSON = (checkCriticalElement(OperaValTyJSON$iterator.i < OperaValTyJSON$iterator.this$01_0.size_1()) , dynamicCast(OperaValTyJSON$iterator.this$01_0.get_1(OperaValTyJSON$iterator.last = OperaValTyJSON$iterator.i++), 38));
    $equals_0(OperaValTyJSON.View.toLowerCase(), 'proto') && $equals_0(OperaValTyJSON.Name.toLowerCase(), 'type') && $equals_0(OperaValTyJSON.Default.toLowerCase(), 'term') && (TermBien = true);
    $equals_0(OperaValTyJSON.View.toLowerCase(), 'proto') && $equals_0(OperaValTyJSON.Name.toLowerCase(), 'source') && $equals_0(OperaValTyJSON.Default.toLowerCase(), 'auto') && (SourceAutoBien = true);
    if (TermBien && SourceAutoBien)
      break;
  }
  TermBien || (setCheck(Errores.array, Errores.array.length, 'Term structure element view should have term type proto->type->term') , true);
  SourceAutoBien || (setCheck(Errores.array, Errores.array.length, 'Term structure element view should have term type proto->source->auto') , true);
  this$static.TermElements = new LinkedList;
  this$static.UteranciasBien = new LinkedList;
  this$static.ImagenesBien = new LinkedList;
  this$static.DeleteBien = null;
  for (structureJSON$iterator0 = new AbstractList$IteratorImpl(ZonaBUsqueda); structureJSON$iterator0.i < structureJSON$iterator0.this$01_0.size_1();) {
    structureJSON = (checkCriticalElement(structureJSON$iterator0.i < structureJSON$iterator0.this$01_0.size_1()) , dynamicCast(structureJSON$iterator0.this$01_0.get_1(structureJSON$iterator0.last = structureJSON$iterator0.i++), 15));
    ($equals_1(structureJSON.Id, sS.ClaseOf) || $equals(structureJSON.ClaseOf, sS.ClaseOf)) && ($addLast(this$static.TermElements, structureJSON) , true);
    if (structureJSON.TypeOfStructure == Text_0)
      for (ViewstructureJSON$iterator0 = new AbstractList$IteratorImpl(structureJSON.Shows); ViewstructureJSON$iterator0.i < ViewstructureJSON$iterator0.this$01_0.size_1();) {
        ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator0.i < ViewstructureJSON$iterator0.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator0.this$01_0.get_1(ViewstructureJSON$iterator0.last = ViewstructureJSON$iterator0.i++), 38));
        $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'utterance') && ($addLast(this$static.UteranciasBien, structureJSON) , true);
      }
    if (structureJSON.TypeOfStructure == Resource)
      for (ViewstructureJSON$iterator1 = new AbstractList$IteratorImpl(structureJSON.Shows); ViewstructureJSON$iterator1.i < ViewstructureJSON$iterator1.this$01_0.size_1();) {
        ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator1.i < ViewstructureJSON$iterator1.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator1.this$01_0.get_1(ViewstructureJSON$iterator1.last = ViewstructureJSON$iterator1.i++), 38));
        $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'image') && ($addLast(this$static.ImagenesBien, structureJSON) , true);
      }
    if (structureJSON.TypeOfStructure == Basic)
      for (ViewstructureJSON$iterator = new AbstractList$IteratorImpl(structureJSON.Shows); ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1();) {
        ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator.this$01_0.get_1(ViewstructureJSON$iterator.last = ViewstructureJSON$iterator.i++), 38));
        $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'delete') && (this$static.DeleteBien = structureJSON);
      }
  }
  this$static.UteranciasBien.size_0 == 0 && (setCheck(Errores.array, Errores.array.length, 'I cant found Utterances structure element in this context father with view proto->type->utterance') , true);
  !this$static.DeleteBien && (setCheck(Errores.array, Errores.array.length, 'I cant found Delete structure element in this context father with view proto->type->delete') , true);
  this$static.ImagenesBien.size_0 == 0 && (setCheck(Errores.array, Errores.array.length, 'I cant found Images structure element in this context father with view proto->type->image') , true);
  this$static.UteranciasBien.size_0 != 0 && !dynamicCast($get_2(this$static.UteranciasBien, 0), 15).Multivalued && (setCheck(Errores.array, Errores.array.length, 'Utterances structure element should be multivalued') , true);
  this$static.ImagenesBien.size_0 != 0 && !dynamicCast($get_2(this$static.ImagenesBien, 0), 15).Multivalued && (setCheck(Errores.array, Errores.array.length, 'Images structure element should be multivalued') , true);
  this$static.Termino_Posicion = new HashMap;
  this$static.Termino_Seman = new HashMap;
  this$static.Termino_Delete = new HashMap;
  for (termElem$iterator = $listIterator(this$static.TermElements, 0); termElem$iterator.currentNode != termElem$iterator.this$01.tail;) {
    termElem = (checkCriticalElement(termElem$iterator.currentNode != termElem$iterator.this$01.tail) , termElem$iterator.lastNode = termElem$iterator.currentNode , termElem$iterator.currentNode = termElem$iterator.currentNode.next , ++termElem$iterator.currentIndex , dynamicCast(termElem$iterator.lastNode.value_0, 15));
    PositionsList = new LinkedList;
    for (structureJSON$iterator1 = new AbstractList$IteratorImpl(termElem.Sons); structureJSON$iterator1.i < structureJSON$iterator1.this$01_0.size_1();) {
      structureJSON = (checkCriticalElement(structureJSON$iterator1.i < structureJSON$iterator1.this$01_0.size_1()) , dynamicCast(structureJSON$iterator1.this$01_0.get_1(structureJSON$iterator1.last = structureJSON$iterator1.i++), 15));
      if (structureJSON.TypeOfStructure == Text_0)
        for (ViewstructureJSON$iterator = new AbstractList$IteratorImpl(structureJSON.Shows); ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1();) {
          ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator.this$01_0.get_1(ViewstructureJSON$iterator.last = ViewstructureJSON$iterator.i++), 38));
          $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'position') && ($addNode(PositionsList, structureJSON, PositionsList.tail.prev, PositionsList.tail) , true);
        }
    }
    SemanticList = new LinkedList;
    for (structureJSON$iterator2 = new AbstractList$IteratorImpl(termElem.Sons); structureJSON$iterator2.i < structureJSON$iterator2.this$01_0.size_1();) {
      structureJSON = (checkCriticalElement(structureJSON$iterator2.i < structureJSON$iterator2.this$01_0.size_1()) , dynamicCast(structureJSON$iterator2.this$01_0.get_1(structureJSON$iterator2.last = structureJSON$iterator2.i++), 15));
      if (structureJSON.TypeOfStructure == Text_0)
        for (ViewstructureJSON$iterator = new AbstractList$IteratorImpl(structureJSON.Shows); ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1();) {
          ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator.this$01_0.get_1(ViewstructureJSON$iterator.last = ViewstructureJSON$iterator.i++), 38));
          $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'semantic') && ($addNode(SemanticList, structureJSON, SemanticList.tail.prev, SemanticList.tail) , true);
        }
    }
    DeleteElement = null;
    for (structureJSON$iterator = new AbstractList$IteratorImpl(termElem.Sons); structureJSON$iterator.i < structureJSON$iterator.this$01_0.size_1();) {
      structureJSON = (checkCriticalElement(structureJSON$iterator.i < structureJSON$iterator.this$01_0.size_1()) , dynamicCast(structureJSON$iterator.this$01_0.get_1(structureJSON$iterator.last = structureJSON$iterator.i++), 15));
      if (structureJSON.TypeOfStructure == Basic)
        for (ViewstructureJSON$iterator = new AbstractList$IteratorImpl(structureJSON.Shows); ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1();) {
          ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator.this$01_0.get_1(ViewstructureJSON$iterator.last = ViewstructureJSON$iterator.i++), 38));
          $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'delete') && (DeleteElement = structureJSON);
        }
    }
    $put_0(this$static.Termino_Posicion, termElem, PositionsList);
    $put_0(this$static.Termino_Seman, termElem, SemanticList);
    !!DeleteElement && $put_0(this$static.Termino_Delete, termElem, DeleteElement);
  }
  for (err$iterator0 = new AbstractList$IteratorImpl(Errores); err$iterator0.i < err$iterator0.this$01_0.size_1();) {
    err = (checkCriticalElement(err$iterator0.i < err$iterator0.this$01_0.size_1()) , dynamicCastToString(err$iterator0.this$01_0.get_1(err$iterator0.last = err$iterator0.i++)));
    console_1('E2:' + err);
  }
  console_1('TP:' + this$static.Termino_Posicion.size_0);
  console_1('TS:' + this$static.Termino_Posicion.size_0);
  ListSemantic = new LinkedList_0(new AbstractHashMap$EntrySet(this$static.Termino_Seman));
  ListPosition = new LinkedList_0(new AbstractHashMap$EntrySet(this$static.Termino_Posicion));
  ListPosition.size_0 != 0 && dynamicCast(dynamicCast($get_2(ListPosition, 0), 10).getValue(), 11).isEmpty() && (setCheck(Errores.array, Errores.array.length, 'Term structure element should have almost one Position structure element with position view proto->type->position') , true);
  ListSemantic.size_0 != 0 && dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).isEmpty() && (setCheck(Errores.array, Errores.array.length, 'Term element should have almost one Semantic element with semantic view proto->type->semantic') , true);
  ListPosition.size_0 != 0 && !dynamicCast(dynamicCast($get_2(ListPosition, 0), 10).getValue(), 11).isEmpty() && !dynamicCast(dynamicCast(dynamicCast($get_2(ListPosition, 0), 10).getValue(), 11).get_1(0), 15).Multivalued && (setCheck(Errores.array, Errores.array.length, 'Position structure element should be multivalued') , true);
  ListSemantic.size_0 != 0 && !dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).isEmpty() && !dynamicCast(dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).get_1(0), 15).Multivalued && (setCheck(Errores.array, Errores.array.length, 'Semantic structure element should be multivalued') , true);
  if (ListSemantic.size_0 != 0 && !dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).isEmpty() && dynamicCast(dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).get_1(0), 15).Sons.array.length != 0) {
    console_1('TP1: ' + ListSemantic.size_0);
    console_1('TP2: ' + dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).size_1());
    console_1('TP3: ' + dynamicCast(dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).get_1(0), 15).Sons.array.length);
    console_1('TP4: ' + dynamicCast($get_3(dynamicCast(dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).get_1(0), 15).Sons, 0), 15).Shows.array.length);
    CUIBoo = false;
    for (ViewstructureJSON$iterator = new AbstractList$IteratorImpl(dynamicCast($get_3(dynamicCast(dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).get_1(0), 15).Sons, 0), 15).Shows); ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1();) {
      ViewstructureJSON = (checkCriticalElement(ViewstructureJSON$iterator.i < ViewstructureJSON$iterator.this$01_0.size_1()) , dynamicCast(ViewstructureJSON$iterator.this$01_0.get_1(ViewstructureJSON$iterator.last = ViewstructureJSON$iterator.i++), 38));
      $equals_0(ViewstructureJSON.View.toLowerCase(), 'proto') && $equals_0(ViewstructureJSON.Name.toLowerCase(), 'type') && $equals_0(ViewstructureJSON.Default.toLowerCase(), 'cui') && (CUIBoo = true);
    }
    CUIBoo?dynamicCast($get_3(dynamicCast(dynamicCast(dynamicCast($get_2(ListSemantic, 0), 10).getValue(), 11).get_1(0), 15).Sons, 0), 15).TypeOfStructure != Text_0 && (setCheck(Errores.array, Errores.array.length, 'Semantic element should have a CUI element with Text Type') , true):(setCheck(Errores.array, Errores.array.length, 'Semantic structure element should have a CUI element with CUI view proto->type->cui') , true);
  }
  this$static.Termino_Delete.size_0 == 0 && (setCheck(Errores.array, Errores.array.length, 'Term structure element should have delete structure element with position view proto->type->delete') , true);
  for (err$iterator = new AbstractList$IteratorImpl(Errores); err$iterator.i < err$iterator.this$01_0.size_1();) {
    err = (checkCriticalElement(err$iterator.i < err$iterator.this$01_0.size_1()) , dynamicCastToString(err$iterator.this$01_0.get_1(err$iterator.last = err$iterator.i++)));
    console_1('E2:' + err);
  }
  return Errores;
}

function CompositeDocumentEditionProto(randomIdVars, contextId, Height){
  var Errores, Gr, Gr$iterator, JSOSucion, PanelBotones, PanelDelete, RP, SDocumentoS, SS, T4, T5, VP, basicoEspacio, string, string$iterator, DocumentoJ;
  this.RandomIdVars = randomIdVars;
  this.Heigh = Height - 32;
  this.Width = $getClientWidth($doc);
  this.Width > 515 && (this.Width = this.Width - 315);
  this.ContextId = contextId;
  RP = get_0(this.RandomIdVars);
  VP = new VerticalPanel;
  $setPropertyInt(VP.table, 'cellSpacing', 20);
  $add(RP, VP, ($clinit_DOM() , RP.element));
  this.PanelPrincipal = VP;
  SDocumentoS = getVariableBaseJSONOBJS(this.RandomIdVars);
  JSOSucion = ($clinit_JSONParser() , dynamicCast(parse_0(SDocumentoS), 37));
  this.Documento = (DocumentoJ = new DocumentCompleteJSON , $setDocumento(DocumentoJ, createDocument($get_0(JSOSucion, 'Documento').isObject())) , $setGramatica(DocumentoJ, createGramatica($get_0(JSOSucion, 'Gramaticas').isArray_0())) , DocumentoJ);
  SS = null;
  for (Gr$iterator = new AbstractList$IteratorImpl(this.Documento.Gramaticas); Gr$iterator.i < Gr$iterator.this$01_0.size_1();) {
    Gr = (checkCriticalElement(Gr$iterator.i < Gr$iterator.this$01_0.size_1()) , dynamicCast(Gr$iterator.this$01_0.get_1(Gr$iterator.last = Gr$iterator.i++), 66));
    SS = $gotContext(this, Gr.ListaS, this.ContextId);
    if (SS)
      break;
  }
  if (!SS) {
    T4 = new Label;
    $setTextOrHtml(T4.directionalTextHelper, 'Context not found');
    $add_2(VP, T4);
  }
   else {
    console_1('1:' + SS.Name);
    Errores = $test(this, SS);
    if (Errores.array.length == 0) {
      this.dockLayoutPanel = new DockLayoutPanel(($clinit_Style$Unit() , PX));
      $add_2(VP, this.dockLayoutPanel);
      $setSize(this.dockLayoutPanel, this.Width + 'px', this.Heigh + 'px');
      this.PanelPrincipal = this.dockLayoutPanel;
      PanelBotones = new HorizontalPanel;
      $setPropertyInt(PanelBotones.table, 'cellSpacing', 6);
      $setVerticalAlignment(PanelBotones, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
      $insert(this.dockLayoutPanel, PanelBotones, ($clinit_DockLayoutPanel$Direction() , SOUTH), 80);
      PanelDelete = new HorizontalPanel;
      $setVerticalAlignment(PanelDelete, ALIGN_MIDDLE);
      setStyleName(PanelDelete.element, 'botoneraDelete', true);
      $setPropertyInt(PanelDelete.table, 'cellSpacing', 3);
      basicoEspacio = new SimplePanel;
      setStyleName(basicoEspacio.element, 'simplePanel', true);
      this.DeleteLabel = new Label_0($get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabel'));
      this.DeleteDocumentButton = new PushButton(new Image_1('img/ejectnormalred.png'));
      $setTitle(this.DeleteDocumentButton, $get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'deletelabel'));
      $addDomHandler(this.DeleteDocumentButton, new CompositeDocumentEditionProto$1(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
      this.RecoverDocumentButton = new PushButton(new Image_1('Proto/ejectnormal.png'));
      $setTitle(this.RecoverDocumentButton, $get_4((!singletonImp && (singletonImp = new StringConstants) , singletonImp), 'recoverlabel'));
      $addDomHandler(this.RecoverDocumentButton, new CompositeDocumentEditionProto$2(this), (null , TYPE));
      $add_0(PanelDelete, basicoEspacio);
      $add_0(PanelDelete, this.DeleteDocumentButton);
      $add_0(PanelDelete, this.RecoverDocumentButton);
      $add_0(PanelDelete, this.DeleteLabel);
      $add_0(PanelBotones, PanelDelete);
      $CreaLosPaneles(this);
    }
     else {
      T4 = new Label;
      $setTextOrHtml(T4.directionalTextHelper, 'Context not match with requiered structure');
      $add_2(VP, T4);
      for (string$iterator = new AbstractList$IteratorImpl(Errores); string$iterator.i < string$iterator.this$01_0.size_1();) {
        string = (checkCriticalElement(string$iterator.i < string$iterator.this$01_0.size_1()) , dynamicCastToString(string$iterator.this$01_0.get_1(string$iterator.last = string$iterator.i++)));
        T5 = new Label;
        $setTextOrHtml(T5.directionalTextHelper, string);
        $add_2(VP, T5);
      }
    }
  }
}

function console_1(text_0){
  console.log(text_0);
}

function getVariableBaseJSONOBJS(documentID2){
  $wnd.daletmp = '$wnd.dale = $wnd.JSDocExpand' + documentID2;
  eval($wnd.daletmp);
  return $wnd.dale;
}

function setVariableBase3(DocumentoExpandido, idrandomdoct){
  $wnd.tmp = DocumentoExpandido;
  $wnd.str = '$wnd.JSDocExpand' + idrandomdoct + ' = $wnd.tmp';
  console.log($wnd.str);
  eval($wnd.str);
}

defineClass(115, 1, {}, CompositeDocumentEditionProto);
_.Heigh = 0;
_.ImagenActual = 0;
_.Width = 0;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto', 115);
function CompositeDocumentDescriptionProto(randomIdVars, contextId, Height){
  CompositeDocumentEditionProto.call(this, randomIdVars, contextId, Height);
}

defineClass(177, 115, {}, CompositeDocumentDescriptionProto);
var Lucm_fdi_ilsa_client_CompositeDocumentDescriptionProto_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentDescriptionProto', 177);
function CompositeDocumentEditionProto$1(this$0){
  this.this$01 = this$0;
}

defineClass(171, 1, $intern_31, CompositeDocumentEditionProto$1);
_.onClick = function onClick(arg0){
  $setSelectedValue(this.this$01.DeleteBien, true);
  $processActualDocument(this.this$01);
}
;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto$1_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto/1', 171);
function CompositeDocumentEditionProto$2(this$0){
  this.this$01 = this$0;
}

defineClass(172, 1, $intern_31, CompositeDocumentEditionProto$2);
_.onClick = function onClick_0(arg0){
  $setSelectedValue(this.this$01.DeleteBien, false);
  $processActualDocument(this.this$01);
}
;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto$2_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto/2', 172);
function CompositeDocumentEditionProto$3(this$0){
  this.this$01 = this$0;
}

defineClass(173, 1, $intern_31, CompositeDocumentEditionProto$3);
_.onClick = function onClick_1(arg0){
  ++this.this$01.ImagenActual;
  $printImage(this.this$01);
}
;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto$3_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto/3', 173);
function CompositeDocumentEditionProto$4(this$0){
  this.this$01 = this$0;
}

defineClass(174, 1, $intern_31, CompositeDocumentEditionProto$4);
_.onClick = function onClick_2(arg0){
  --this.this$01.ImagenActual;
  $printImage(this.this$01);
}
;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto$4_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto/4', 174);
function CompositeDocumentEditionProto$5(this$0){
  this.this$01 = this$0;
}

defineClass(175, 1, $intern_31, CompositeDocumentEditionProto$5);
_.onClick = function onClick_3(arg0){
  !$equals_0($getUrl(this.this$01.Ima).uri_0, 'default.png');
}
;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto$5_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto/5', 175);
function CompositeDocumentEditionProto$6(this$0){
  this.this$01 = this$0;
}

defineClass(176, 1, $intern_31, CompositeDocumentEditionProto$6);
_.onClick = function onClick_4(arg0){
  var labe;
  labe = dynamicCast(arg0.source, 33);
  if ($advanceToFind(this.this$01.ActualSelected, labe, false)) {
    setStyleName(($clinit_DOM() , labe.element), 'selectedLab', false);
    $advanceToFind(this.this$01.ActualSelected, labe, true);
  }
   else {
    setStyleName(($clinit_DOM() , labe.element), 'selectedLab', true);
    $addLast(this.this$01.ActualSelected, labe);
  }
}
;
var Lucm_fdi_ilsa_client_CompositeDocumentEditionProto$6_2_classLit = createForClass('ucm.fdi.ilsa.client', 'CompositeDocumentEditionProto/6', 176);
function CreateDocIn(documento2){
  var DocumentoJI;
  DocumentoJI = new JSONObject;
  $put(DocumentoJI, 'Id', new JSONNumber(toDouble(documento2.Id.value_0)));
  $put(DocumentoJI, 'Coleccion', new JSONNumber(toDouble(documento2.Coleccion.value_0)));
  $put(DocumentoJI, 'Description', new JSONString(documento2.Description));
  $put(DocumentoJI, 'IconPath', new JSONString(documento2.IconPath));
  $put(DocumentoJI, 'QRPath', new JSONString(documento2.QRPath));
  $put(DocumentoJI, 'UserDocument', CreateUserDoc(documento2.UserDocument));
  $put(DocumentoJI, 'OperationalValues', CreateOperationalValues(documento2.OperationalValues));
  return DocumentoJI;
}

function CreateGramIn(gramatica){
  var GramarIn, i;
  GramarIn = new JSONArray;
  for (i = 0; i < gramatica.array.length; i++) {
    $set_1(GramarIn, i, grammarInUni((checkElementIndex(i, gramatica.array.length) , dynamicCast(gramatica.array[i], 66))));
  }
  return GramarIn;
}

function CreateIds(id_0){
  var UserDoc, i;
  UserDoc = new JSONArray;
  for (i = 0; i < id_0.array.length; i++) {
    $set_1(UserDoc, i, new JSONNumber(toDouble((checkElementIndex(i, id_0.array.length) , dynamicCast(id_0.array[i], 39)).value_0)));
  }
  return UserDoc;
}

function CreateListStruc(listaS){
  var UserDoc, i;
  UserDoc = new JSONArray;
  for (i = 0; i < listaS.array.length; i++) {
    $set_1(UserDoc, i, createStruct((checkElementIndex(i, listaS.array.length) , dynamicCast(listaS.array[i], 15))));
  }
  return UserDoc;
}

function CreateOperationalValues(operationalValues){
  var UserDoc, i;
  UserDoc = new JSONArray;
  for (i = 0; i < operationalValues.array.length; i++) {
    $set_1(UserDoc, i, createOperational((checkElementIndex(i, operationalValues.array.length) , dynamicCast(operationalValues.array[i], 102))));
  }
  return UserDoc;
}

function CreateOperationalValuesTy(operational){
  var UserDoc, i;
  UserDoc = new JSONArray;
  for (i = 0; i < operational.array.length; i++) {
    $set_1(UserDoc, i, createOperationalTy((checkElementIndex(i, operational.array.length) , dynamicCast(operational.array[i], 38))));
  }
  return UserDoc;
}

function CreateUserDoc(userDocument){
  var UserDoc, i;
  UserDoc = new JSONArray;
  for (i = 0; i < userDocument.array.length; i++) {
    $set_1(UserDoc, i, new JSONNumber(toDouble((checkElementIndex(i, userDocument.array.length) , dynamicCast(userDocument.array[i], 39)).value_0)));
  }
  return UserDoc;
}

function createDocument(jsonValue){
  var D;
  D = new DocumentsJSON;
  $setId(D, valueOf_1(fromDouble((new Double($get_0(jsonValue, 'Id').isNumber().value_0)).value_0)));
  $setColeccion(D, valueOf_1(fromDouble((new Double($get_0(jsonValue, 'Coleccion').isNumber().value_0)).value_0)));
  $setDescription(D, $get_0(jsonValue, 'Description').isString().value_0);
  $setIconPath(D, $get_0(jsonValue, 'IconPath').isString().value_0);
  $setQRPath(D, $get_0(jsonValue, 'QRPath').isString().value_0);
  $setUserDocument(D, createUsersID($get_0(jsonValue, 'UserDocument').isArray_0()));
  $setOperationalValues(D, createOperaValue($get_0(jsonValue, 'OperationalValues').isArray_0()));
  return D;
}

function createGramarUni(object){
  var Salida;
  Salida = new GrammarJSON;
  $setId_0(Salida, valueOf_1(fromDouble((new Double($get_0(object, 'Id').isNumber().value_0)).value_0)));
  $setColeccion_0(Salida, valueOf_1(fromDouble((new Double($get_0(object, 'Coleccion').isNumber().value_0)).value_0)));
  $setDescription_0(Salida, $get_0(object, 'Description').isString().value_0);
  $setName_0(Salida, $get_0(object, 'Name').isString().value_0);
  $setListaS(Salida, createStrList($get_0(object, 'ListaS').isArray_0()));
  $setOperational(Salida, createOperaValueTy($get_0(object, 'Operational').isArray_0()));
  return Salida;
}

function createGramatica(array){
  var Lista, i;
  Lista = new ArrayList;
  for (i = 0; i < array.jsArray.length; i++)
    $add_4(Lista, createGramarUni($get(array, i).isObject()));
  return Lista;
}

function createIds(array){
  var Salida, i;
  Salida = new ArrayList;
  for (i = 0; i < array.jsArray.length; i++)
    $add_4(Salida, valueOf_1(fromDouble((new Double($get(array, i).isNumber().value_0)).value_0)));
  return Salida;
}

function createOperaTyUni(object){
  var OPJ;
  OPJ = new OperationalValueTypeJSON;
  $setId_2(OPJ, createIds($get_0(object, 'Id').isArray_0()));
  $setDefault(OPJ, $get_0(object, 'Default').isString().value_0);
  $setName_1(OPJ, $get_0(object, 'Name').isString().value_0);
  $setView(OPJ, $get_0(object, 'View').isString().value_0);
  return OPJ;
}

function createOperaUni(object){
  var OPJ;
  OPJ = new OperationalValueJSON;
  $setId_1(OPJ, valueOf_1(fromDouble((new Double($get_0(object, 'Id').isNumber().value_0)).value_0)));
  $setOperationalValueTypeId(OPJ, valueOf_1(fromDouble((new Double($get_0(object, 'OperationalValueTypeId').isNumber().value_0)).value_0)));
  $setValue(OPJ, $get_0(object, 'Value').isString().value_0);
  return OPJ;
}

function createOperaValue(array){
  var Lista, i;
  Lista = new ArrayList;
  for (i = 0; i < array.jsArray.length; i++)
    $add_4(Lista, createOperaUni($get(array, i).isObject()));
  return Lista;
}

function createOperaValueTy(array){
  var Lista, i;
  Lista = new ArrayList;
  for (i = 0; i < array.jsArray.length; i++)
    $add_4(Lista, createOperaTyUni($get(array, i).isObject()));
  return Lista;
}

function createOperational(operationalValueJSON){
  var DocumentoJI;
  DocumentoJI = new JSONObject;
  $put(DocumentoJI, 'Id', new JSONNumber(toDouble(operationalValueJSON.Id.value_0)));
  $put(DocumentoJI, 'OperationalValueTypeId', new JSONNumber(toDouble(operationalValueJSON.OperationalValueTypeId.value_0)));
  $put(DocumentoJI, 'Value', new JSONString(operationalValueJSON.Value));
  return DocumentoJI;
}

function createOperationalTy(operationalValueTypeJSON){
  var DocumentoJI;
  DocumentoJI = new JSONObject;
  $put(DocumentoJI, 'Id', CreateIds(operationalValueTypeJSON.Id));
  $put(DocumentoJI, 'Name', new JSONString(operationalValueTypeJSON.Name));
  $put(DocumentoJI, 'View', new JSONString(operationalValueTypeJSON.View));
  $put(DocumentoJI, 'Default', new JSONString(operationalValueTypeJSON.Default));
  return DocumentoJI;
}

function createStrList(array){
  var Lista, i;
  Lista = new ArrayList;
  for (i = 0; i < array.jsArray.length; i++)
    $add_4(Lista, createStrUni($get(array, i).isObject()));
  return Lista;
}

function createStrUni(object){
  var ElementId, Father, Salida, TypeOfStructure, TypeOfStructureT, Value, ValueU;
  Salida = new StructureJSON;
  $setId_3(Salida, createIds($get_0(object, 'Id').isArray_0()));
  $setClaseOf(Salida, valueOf_1(fromDouble((new Double($get_0(object, 'ClaseOf').isNumber().value_0)).value_0)));
  ElementId = $get_0(object, 'ElementId');
  ElementId.isNumber()?$setElementId(Salida, valueOf_1(fromDouble((new Double(ElementId.isNumber().value_0)).value_0))):(Salida.ElementId = null);
  Father = $get_0(object, 'Father');
  Father.isNumber()?$setFather(Salida, valueOf_1(fromDouble((new Double(Father.isNumber().value_0)).value_0))):(Salida.Father = null);
  $setName_2(Salida, $get_0(object, 'Name').isString().value_0);
  Value = $get_0(object, 'Value');
  Value.isString()?$setValue_0(Salida, Value.isString().value_0):(Salida.Value = '');
  ValueU = $get_0(object, 'URLValue');
  ValueU.isString()?$setURLValue(Salida, ValueU.isString().value_0):(Salida.URLValue = '');
  TypeOfStructure = $get_0(object, 'TypeOfStructure').isString().value_0;
  try {
    TypeOfStructureT = ($clinit_StructureJSON$TypeOfStructureEnum() , dynamicCast(valueOf(($clinit_StructureJSON$TypeOfStructureEnum$Map() , $MAP), TypeOfStructure), 54));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 13)) {
      TypeOfStructureT = ($clinit_StructureJSON$TypeOfStructureEnum() , Basic);
    }
     else 
      throw unwrap_5($e0);
  }
  Salida.TypeOfStructure = TypeOfStructureT;
  $setOperationalValues_0(Salida, createOperaValue($get_0(object, 'OperationalValues').isArray_0()));
  $setShows(Salida, createOperaValueTy($get_0(object, 'Shows').isArray_0()));
  $setSons(Salida, createStrList($get_0(object, 'Sons').isArray_0()));
  $setMultivalued(Salida, $get_0(object, 'Multivalued').isBoolean().value_0);
  $setBrowseable(Salida, $get_0(object, 'Browseable').isBoolean().value_0);
  $setSelected(Salida, $get_0(object, 'Selected').isBoolean().value_0);
  $setExtended(Salida, $get_0(object, 'Extended').isBoolean().value_0);
  $setFiltro(Salida, $get_0(object, 'Filtro').isBoolean().value_0);
  $setSelectedValue(Salida, $get_0(object, 'SelectedValue').isBoolean().value_0);
  return Salida;
}

function createStruct(structureJSON){
  var DocumentoJI;
  DocumentoJI = new JSONObject;
  $put(DocumentoJI, 'Id', CreateIds(structureJSON.Id));
  $put(DocumentoJI, 'ClaseOf', new JSONNumber(toDouble(structureJSON.ClaseOf.value_0)));
  structureJSON.ElementId?$put(DocumentoJI, 'ElementId', new JSONNumber(toDouble(structureJSON.ElementId.value_0))):$put(DocumentoJI, 'ElementId', ($clinit_JSONNull() , $clinit_JSONNull() , instance_0));
  structureJSON.Father?$put(DocumentoJI, 'Father', new JSONNumber(toDouble(structureJSON.Father.value_0))):$put(DocumentoJI, 'Father', ($clinit_JSONNull() , $clinit_JSONNull() , instance_0));
  $put(DocumentoJI, 'Sons', CreateListStruc(structureJSON.Sons));
  $put(DocumentoJI, 'OperationalValues', CreateOperationalValues(structureJSON.OperationalValues));
  $put(DocumentoJI, 'Shows', CreateOperationalValuesTy(structureJSON.Shows));
  $put(DocumentoJI, 'TypeOfStructure', new JSONString($name(structureJSON.TypeOfStructure)));
  $put(DocumentoJI, 'Multivalued', ($clinit_JSONBoolean() , structureJSON.Multivalued?TRUE_0:FALSE_0));
  $put(DocumentoJI, 'Browseable', structureJSON.Browseable?TRUE_0:FALSE_0);
  $put(DocumentoJI, 'Selected', structureJSON.Selected?TRUE_0:FALSE_0);
  $put(DocumentoJI, 'Extended', structureJSON.Extended?TRUE_0:FALSE_0);
  $put(DocumentoJI, 'Filtro', structureJSON.Filtro?TRUE_0:FALSE_0);
  $put(DocumentoJI, 'SelectedValue', structureJSON.SelectedValue?TRUE_0:FALSE_0);
  structureJSON.Value != null?$put(DocumentoJI, 'Value', new JSONString(structureJSON.Value)):$put(DocumentoJI, 'Value', ($clinit_JSONNull() , $clinit_JSONNull() , instance_0));
  structureJSON.URLValue != null?$put(DocumentoJI, 'URLValue', new JSONString(structureJSON.URLValue)):$put(DocumentoJI, 'URLValue', ($clinit_JSONNull() , $clinit_JSONNull() , instance_0));
  $put(DocumentoJI, 'Name', new JSONString(structureJSON.Name));
  return DocumentoJI;
}

function createUsersID(array){
  var Lista, i;
  Lista = new ArrayList;
  for (i = 0; i < array.jsArray.length; i++)
    $add_4(Lista, valueOf_1(fromDouble((new Double($get(array, i).isNumber().value_0)).value_0)));
  return Lista;
}

function grammarInUni(grammarJSON){
  var DocumentoJI;
  DocumentoJI = new JSONObject;
  $put(DocumentoJI, 'Id', new JSONNumber(toDouble(grammarJSON.Id.value_0)));
  $put(DocumentoJI, 'Coleccion', new JSONNumber(toDouble(grammarJSON.Coleccion.value_0)));
  $put(DocumentoJI, 'Description', new JSONString(grammarJSON.Description));
  $put(DocumentoJI, 'Name', new JSONString(grammarJSON.Name));
  $put(DocumentoJI, 'ListaS', CreateListStruc(grammarJSON.ListaS));
  $put(DocumentoJI, 'Operational', CreateOperationalValuesTy(grammarJSON.Operational));
  return DocumentoJI;
}

function $clinit_GWTExternalProto(){
  $clinit_GWTExternalProto = emptyMethod;
  $wnd.ProtoSetContext = setContext;
  $wnd.ProtoGetIcon = getIcon;
  $wnd.ProtoPersist = getPersist;
  $wnd.ProtoisWaitingUpdate = isWaitingUpdate;
  $wnd.ProtoupdateContext = updateContext;
  $wnd.ProtosetWaitingUpdate = setWaitingUpdate;
}

function getIcon(){
  return 'proto.png';
}

function getPersist(){
  !!Actual && $persistJS(Actual);
}

function isWaitingUpdate(){
  return false;
}

function setContext(IdVentana, contextId, Height, isgrammar, edit, views, CompleteView){
  var contLong, heiInteger;
  contLong = valueOf_1(__parseAndValidateLong(contextId));
  heiInteger = valueOf_0(__parseAndValidateInt(Height));
  edit?(Actual = new CompositeDocumentEditionProto(IdVentana, contLong, heiInteger.value_0)):(Actual = new CompositeDocumentDescriptionProto(IdVentana, contLong, heiInteger.value_0));
}

function setWaitingUpdate(update){
}

function updateContext(){
  return true;
}

var Actual;
function $get_4(this$static, entrada){
  return $getStringValue(this$static.id_valorS, entrada.toLowerCase()) != null?dynamicCastToString($getStringValue(this$static.id_valorS, entrada.toLowerCase())):'...';
}

function StringConstants(){
  this.id_valorS = new HashMap;
  $putStringValue(this.id_valorS, 'loading', 'LOADING...');
  $putStringValue(this.id_valorS, 'userlogin', 'User: ');
  $putStringValue(this.id_valorS, 'passwordlogin', 'Password: ');
  $putStringValue(this.id_valorS, 'buttonlogin', 'Login');
  $putStringValue(this.id_valorS, 'archivomenu', 'File');
  $putStringValue(this.id_valorS, 'save', 'Save');
  $putStringValue(this.id_valorS, 'documentfindings', 'Document Findings Text: ');
  $putStringValue(this.id_valorS, 'cannotbeempty', 'Text cannot be empty ');
  $putStringValue(this.id_valorS, 'termexist', 'Term already exist in the document');
  $putStringValue(this.id_valorS, 'close', 'Close');
  $putStringValue(this.id_valorS, 'selectionempty', 'Selection of words is empty');
  $putStringValue(this.id_valorS, 'disableglobal', 'Press to disable this term in the collection');
  $putStringValue(this.id_valorS, 'disablelocal', 'Press to disable this term in the report');
  $putStringValue(this.id_valorS, 'edittit', 'Press to edit this term in the report');
  $putStringValue(this.id_valorS, 'deletelabel', 'Delete Document');
  $putStringValue(this.id_valorS, 'recoverlabel', 'Recover Document');
  $putStringValue(this.id_valorS, 'deletelabeldocument', '///Document Deleted');
  $putStringValue(this.id_valorS, 'tools', 'Tools');
  $putStringValue(this.id_valorS, 'refreshkey', 'Refresh Key');
  $putStringValue(this.id_valorS, 'idprefix', 'ID-> ');
  $putStringValue(this.id_valorS, 'review', 'Review');
  $putStringValue(this.id_valorS, 'reviewbegin', 'Review from the Beginning');
  $putStringValue(this.id_valorS, 'gotobegin', 'Goto Start');
  $putStringValue(this.id_valorS, 'gotoend', 'Goto End');
  $putStringValue(this.id_valorS, 'generainformes', 'Generate Summaries');
  $putStringValue(this.id_valorS, 'clicklinkdocument', 'Click on the link to download the summary document');
  $putStringValue(this.id_valorS, 'clicklinkvocabulary', 'Click on the link to download the vocabulary document');
}

defineClass(44, 1, {}, StringConstants);
var singletonImp;
var Lucm_fdi_ilsa_client_StringConstants_2_classLit = createForClass('ucm.fdi.ilsa.client', 'StringConstants', 44);
var I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 355), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 357), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 360), J_classLit = createForPrimitive('long', 'J'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=gwtexternalproto-0.js

