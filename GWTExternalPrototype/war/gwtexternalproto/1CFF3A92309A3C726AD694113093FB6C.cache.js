var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.gwtexternalproto;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '1CFF3A92309A3C726AD694113093FB6C';
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
var $intern_0 = 'object', $intern_1 = 2147483647, $intern_2 = 'java.lang', $intern_3 = 'com.google.gwt.core.client', $intern_4 = {3:1, 4:1}, $intern_5 = {3:1, 7:1, 4:1}, $intern_6 = 'com.google.gwt.core.client.impl', $intern_7 = 'null', $intern_8 = 'anonymous', $intern_9 = {3:1, 218:1}, $intern_10 = 'Unknown', $intern_11 = 'CSS1Compat', $intern_12 = {3:1}, $intern_13 = {25:1, 34:1, 3:1, 11:1, 8:1}, $intern_14 = 'com.google.gwt.dom.client', $intern_15 = {25:1, 35:1, 3:1, 11:1, 8:1}, $intern_16 = {25:1, 36:1, 3:1, 11:1, 8:1}, $intern_17 = 'com.google.web.bindery.event.shared', $intern_18 = 'com.google.gwt.event.shared', $intern_19 = 'com.google.gwt.event.dom.client', $intern_20 = 'touchcancel', $intern_21 = 'touchstart', $intern_22 = 'com.google.gwt.event.logical.shared', $intern_23 = {55:1, 3:1, 7:1, 4:1}, $intern_24 = 'UmbrellaException', $intern_25 = 'com.google.gwt.json.client', $intern_26 = 'Error parsing JSON: ', $intern_27 = 4194303, $intern_28 = 1048575, $intern_29 = 524288, $intern_30 = 4194304, $intern_31 = 17592186044416, $intern_32 = -9223372036854775808, $intern_33 = 'java.util.logging', $intern_34 = 'com.google.gwt.logging.client', $intern_35 = 'com.google.gwt.logging.impl', $intern_36 = 'SEVERE', $intern_37 = {3:1, 107:1}, $intern_38 = 'java.io', $intern_39 = 'com.google.gwt.touch.client', $intern_40 = 'com.google.gwt.user.client', $intern_41 = 'load', $intern_42 = 65536, $intern_43 = 16777216, $intern_44 = 33554432, $intern_45 = 67108864, $intern_46 = '__gwtLastUnhandledEvent', $intern_47 = 'com.google.gwt.user.client.impl', $intern_48 = 'height', $intern_49 = '100%', $intern_50 = 'width', $intern_51 = 'com.google.gwt.user.client.ui', $intern_52 = {26:1, 22:1, 24:1, 23:1, 27:1, 19:1, 15:1}, $intern_53 = 'position', $intern_54 = 'cellSpacing', $intern_55 = 'cellPadding', $intern_56 = {26:1, 22:1, 24:1, 23:1, 27:1, 64:1, 19:1, 15:1}, $intern_57 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie10) does not match the runtime user.agent value (', $intern_58 = 'Expect more errors.', $intern_59 = 'fdi.ucm.server.interconect.model', $intern_60 = 'For input string: "', $intern_61 = 'java.util', $intern_62 = {59:1}, $intern_63 = {3:1, 6:1, 71:1}, $intern_64 = '__proto__', $intern_65 = 'Gramaticas', $intern_66 = 'proto', $intern_67 = 'type', $intern_68 = 'ucm.fdi.ilsa.client', $intern_69 = 'Id', $intern_70 = 'Coleccion', $intern_71 = 'Description', $intern_72 = 'UserDocument', $intern_73 = 'OperationalValues', $intern_74 = 'Name', $intern_75 = 'Operational', $intern_76 = 'OperationalValueTypeId', $intern_77 = 'Value', $intern_78 = 'ElementId', $intern_79 = 'Father', $intern_80 = 'URLValue', $intern_81 = 'TypeOfStructure', $intern_82 = 'Multivalued', $intern_83 = 'Browseable', $intern_84 = 'SelectedValue', $intern_85 = 'com.google.gwt.lang';
var _, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId = {}, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(entry){
  return entry instanceof Array?entry[0]:null;
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V(){
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  var createSubclassPrototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var maybeGetClassLiteralFromPlaceHolder = com_google_gwt_lang_JavaClassHierarchySetupUtil_maybeGetClassLiteralFromPlaceHolder__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
  var prototype = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype);
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.java_lang_Object_castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz$ = clazz);
}

function com_google_gwt_lang_JavaClassHierarchySetupUtil_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(superTypeId){
  var prototypesByTypeId = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId;
  return com_google_gwt_lang_JavaClassHierarchySetupUtil_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(prototypesByTypeId[superTypeId]);
}

function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
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

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function java_lang_Object_$toString__Ljava_lang_Object_2Ljava_lang_String_2(this$static){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static) >>> 0).toString(16);
}

function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z$(other):com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:this$static === other;
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz$:com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(this$static)?java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I$():com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(this$static)?com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2$ = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz$;
}
;
_.hashCode__I$ = function java_lang_Object_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Object_toString__Ljava_lang_String_2(){
  return java_lang_Object_$toString__Ljava_lang_Object_2Ljava_lang_String_2(this);
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2$();
}
;
com_google_gwt_lang_Cast_stringCastMap = {3:1, 256:1, 11:1, 2:1};
com_google_gwt_lang_JavaClassHierarchySetupUtil_modernizeBrowser__V();
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !!com_google_gwt_lang_Cast_stringCastMap[dstId] || src_0.java_lang_Object_castableTypeMap$ && !!src_0.java_lang_Object_castableTypeMap$[dstId];
}

function com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  if (src_0 != null && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0))) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  if (src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0)) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && !com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0);
}

function com_google_gwt_lang_Cast_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return com_google_gwt_lang_Cast_instanceofArray__Ljava_lang_Object_2Z(src_0) && com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(src_0);
}

function com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return ~~Math.max(Math.min(x_0, $intern_1), -2147483648);
}

function com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(o){
  if (o != null) {
    throw new java_lang_ClassCastException_ClassCastException__V;
  }
  return null;
}

var com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  clazz.java_lang_Class_modifiers = 2;
  return clazz;
}

function java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(className, primitiveTypeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('', className);
  clazz.java_lang_Class_typeId = primitiveTypeId;
  clazz.java_lang_Class_modifiers = 1;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  var prototype = com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId];
  return prototype;
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
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

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_JavaClassHierarchySetupUtil_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz$ = clazz;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(85, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Object', 1), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JavaScriptObject$', 0), com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Class', 85);
function com_google_gwt_core_client_Duration_$elapsedMillis__Lcom_google_gwt_core_client_Duration_2I(this$static){
  return com_google_gwt_core_client_JsDate_now__D() - this$static.com_google_gwt_core_client_Duration_start;
}

function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(95, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Duration', 95);
function com_google_gwt_core_client_GWT_isScript__Z(){
  return true;
}

function com_google_gwt_core_client_GWT_setUncaughtExceptionHandler__Lcom_google_gwt_core_client_GWT$UncaughtExceptionHandler_2V(handler){
  com_google_gwt_core_client_GWT_uncaughtExceptionHandler = handler;
}

var com_google_gwt_core_client_GWT_uncaughtExceptionHandler = null;
function java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static){
  this$static.java_lang_Throwable_stackTrace = null;
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this$static, this$static.java_lang_Throwable_detailMessage);
  return this$static;
}

function java_lang_Throwable_$printStackTrace__Ljava_lang_Throwable_2Ljava_io_PrintStream_2V(this$static, out){
  var element, element$array, element$index, element$max, t, com_google_gwt_core_client_impl_StackTraceCreator_constructJavaStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2_stackTrace_0;
  for (t = this$static; t; t = t.java_lang_Throwable_cause) {
    t != this$static && java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out.com_google_gwt_logging_impl_StackTracePrintStream_builder, 'Caused by: ');
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out.com_google_gwt_logging_impl_StackTracePrintStream_builder, '' + t);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out.com_google_gwt_logging_impl_StackTracePrintStream_builder, '\n');
    for (element$array = (t.java_lang_Throwable_stackTrace == null && (t.java_lang_Throwable_stackTrace = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , com_google_gwt_core_client_impl_StackTraceCreator_constructJavaStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2_stackTrace_0 = com_google_gwt_core_client_impl_StackTraceCreator_collector.getStackTrace__Ljava_lang_Object_2_3Ljava_lang_StackTraceElement_2(t) , com_google_gwt_core_client_impl_StackTraceCreator_dropInternalFrames___3Ljava_lang_StackTraceElement_2_3Ljava_lang_StackTraceElement_2(com_google_gwt_core_client_impl_StackTraceCreator_constructJavaStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2_stackTrace_0))) , t.java_lang_Throwable_stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
      element = element$array[element$index];
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out.com_google_gwt_logging_impl_StackTracePrintStream_builder, '\tat ' + element);
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(out.com_google_gwt_logging_impl_StackTracePrintStream_builder, '\n');
    }
  }
}

function java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(this$static){
  var className, msg;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static.java_lang_Object__1_1_1clazz$);
  msg = this$static.getMessage__Ljava_lang_String_2();
  return msg != null?className + ': ' + msg:className;
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  this.java_lang_Throwable_cause = cause;
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(4, 1, $intern_4);
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Throwable', 4);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(7, 4, $intern_5);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Exception', 7);
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(12, 7, $intern_5, java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'RuntimeException', 12);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(111, 12, $intern_5);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'JavaScriptExceptionBase', 111);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?$intern_7:com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  this.java_lang_Throwable_cause = null;
  this.java_lang_Throwable_detailMessage = null;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(37, 111, {37:1, 3:1, 7:1, 4:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this);
  return this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'JavaScriptException', 37);
function com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function com_google_gwt_core_client_JsDate_create__DLcom_google_gwt_core_client_JsDate_2(milliseconds){
  return new Date(milliseconds);
}

function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(c, escapeTable){
  var lookedUp = com_google_gwt_core_client_JsonUtils_escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return s;
}

function com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  !com_google_gwt_core_client_JsonUtils_escapeTable && (com_google_gwt_core_client_JsonUtils_escapeTable = com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2());
  return com_google_gwt_core_client_JsonUtils_escapeTable;
}

function com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
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

var com_google_gwt_core_client_JsonUtils_escapeTable;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(221, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_3, 'Scheduler', 221);
function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    if (com_google_gwt_core_client_GWT_isScript__Z()) {
      return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    }
     else {
      var _ = com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
      _ != null && (_ = _.val);
      return _;
    }
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    if (com_google_gwt_core_client_GWT_uncaughtExceptionHandler) {
      try {
        return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
          t = $e0;
          com_google_gwt_core_client_impl_Impl_reportUncaughtException__Ljava_lang_Throwable_2V(t);
          return undefined;
        }
         else 
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
     else {
      return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
    }
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++com_google_gwt_core_client_impl_Impl_sNextHashId);
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_reportUncaughtException__Ljava_lang_Throwable_2V(e){
  var handler;
  handler = com_google_gwt_core_client_GWT_uncaughtExceptionHandler;
  if (handler) {
    if (handler == com_google_gwt_core_client_impl_Impl_uncaughtExceptionHandlerForTest) {
      return;
    }
    java_util_logging_Logger_$log__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(handler.com_google_gwt_logging_client_LogConfiguration$1_val$log2, (java_util_logging_Level_$clinit__V() , e.getMessage__Ljava_lang_String_2()), e);
    return;
  }
  com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 37)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 37).getThrown__Ljava_lang_Object_2():e);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_sNextHashId = 0, com_google_gwt_core_client_impl_Impl_uncaughtExceptionHandlerForTest, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands) {
    oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = null;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = []);
    com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  }
  !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands));
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands || !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  if (!this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning) {
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = true;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = new com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue = new com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue, 50);
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  while (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute__Z()) {
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
      !!tasks[i] && com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, false]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  com_google_gwt_core_client_JsArray_$push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JavaScriptObject_2V(queue, task);
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):t[0].execute__V();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_reportUncaughtException__Ljava_lang_Throwable_2V(e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  function callback(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    !com_google_gwt_core_client_GWT_isScript__Z() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(139, 221, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'SchedulerImpl', 139);
function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(140, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Flusher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'SchedulerImpl/Flusher', 140);
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(141, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Rescuer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'SchedulerImpl/Rescuer', 141);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(throwable, reference){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2Ljava_lang_Object_2V(throwable, reference);
}

function com_google_gwt_core_client_impl_StackTraceCreator_dropInternalFrames___3Ljava_lang_StackTraceElement_2_3Ljava_lang_StackTraceElement_2(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V';
  numberOfFrameToSearch = java_lang_Math_min__III(stackTrace.length);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(stackTrace[i].java_lang_StackTraceElement_methodName, dropFrameUntilFnName)) {
      return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 218);
    }
  }
  return stackTrace;
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || $intern_8;
}

function com_google_gwt_core_client_impl_StackTraceCreator_parseInt__Ljava_lang_String_2I(number){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  return parseInt(number) || -1;
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(233, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'StackTraceCreator/Collector', 233);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(112, 233, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, thrownIgnored){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
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
_.getStackTrace__Ljava_lang_Object_2_3Ljava_lang_StackTraceElement_2 = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_getStackTrace__Ljava_lang_Object_2_3Ljava_lang_StackTraceElement_2(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StackTraceElement_12_1classLit, $intern_9, 42, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'StackTraceCreator/CollectorLegacy', 112);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  Error.stackTraceLimit = 64;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$parse__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2Ljava_lang_String_2Ljava_lang_StackTraceElement_2(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte__Ljava_lang_String_2Ljava_lang_String_2IILjava_lang_StackTraceElement_2($intern_10, $intern_8, -1, -1);
  }
  toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(stString);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(toReturn.substr(0, 3), 'at ') && (toReturn = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(toReturn.substr(0, index_0));
  }
  index_0 = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(toReturn, java_lang_String_fromCodePoint__ILjava_lang_String_2(46));
  index_0 != -1 && (toReturn = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(toReturn, 'Anonymous function')) && (toReturn = $intern_8);
  lastColonIndex = java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2I(location_0, java_lang_String_fromCodePoint__ILjava_lang_String_2(58));
  endFileUrlIndex = java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2II(location_0, java_lang_String_fromCodePoint__ILjava_lang_String_2(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = $intern_10;
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = com_google_gwt_core_client_impl_StackTraceCreator_parseInt__Ljava_lang_String_2I(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = com_google_gwt_core_client_impl_StackTraceCreator_parseInt__Ljava_lang_String_2I(java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte__Ljava_lang_String_2Ljava_lang_String_2IILjava_lang_StackTraceElement_2(fileName, toReturn, line, col);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(234, 233, {});
_.collect__Ljava_lang_Object_2Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2Ljava_lang_Object_2V(t, jsThrown){
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
_.createSte__Ljava_lang_String_2Ljava_lang_String_2IILjava_lang_StackTraceElement_2 = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_createSte__Ljava_lang_String_2Ljava_lang_String_2IILjava_lang_StackTraceElement_2(fileName, method, line, col){
  return new java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace__Ljava_lang_Object_2_3Ljava_lang_StackTraceElement_2 = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_getStackTrace__Ljava_lang_Object_2_3Ljava_lang_StackTraceElement_2(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, com_google_gwt_core_client_impl_StackTraceCreator_split__Ljava_lang_Object_2Lcom_google_gwt_core_client_JsArrayString_2_e_0;
  stack_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , com_google_gwt_core_client_impl_StackTraceCreator_split__Ljava_lang_Object_2Lcom_google_gwt_core_client_JsArrayString_2_e_0 = t.__gwt$backingJsError , com_google_gwt_core_client_impl_StackTraceCreator_split__Ljava_lang_Object_2Lcom_google_gwt_core_client_JsArrayString_2_e_0 && com_google_gwt_core_client_impl_StackTraceCreator_split__Ljava_lang_Object_2Lcom_google_gwt_core_client_JsArrayString_2_e_0.stack?com_google_gwt_core_client_impl_StackTraceCreator_split__Ljava_lang_Object_2Lcom_google_gwt_core_client_JsArrayString_2_e_0.stack.split('\n'):[]);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StackTraceElement_12_1classLit, $intern_9, 42, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$parse__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2Ljava_lang_String_2Ljava_lang_StackTraceElement_2(this, stack_0[0]);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ste.java_lang_StackTraceElement_methodName, $intern_8) || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$parse__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2Ljava_lang_String_2Ljava_lang_StackTraceElement_2(this, stack_0[i]);
  }
  return stackTrace;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'StackTraceCreator/CollectorModern', 234);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
  com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(113, 234, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
_.createSte__Ljava_lang_String_2Ljava_lang_String_2IILjava_lang_StackTraceElement_2 = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_createSte__Ljava_lang_String_2Ljava_lang_String_2IILjava_lang_StackTraceElement_2(fileName, method, line, col){
  return new java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(method, fileName, -1);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'StackTraceCreator/CollectorModernNoSourceMap', 113);
function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_String_2_3Ljava_lang_Object_2V(expression, errorMessageArgs){
  if (!expression) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(com_google_gwt_core_shared_impl_InternalPreconditions_format__Ljava_lang_String_2_3Ljava_lang_Object_2Ljava_lang_String_2('Enum constant undefined: %s', errorMessageArgs));
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return reference;
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(expression){
  if (!expression) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
}

function com_google_gwt_core_shared_impl_InternalPreconditions_format__Ljava_lang_String_2_3Ljava_lang_Object_2Ljava_lang_String_2(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new java_lang_StringBuilder_StringBuilder__IV(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, template.substr(templateStart, placeholderStart - templateStart));
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(builder, java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.java_lang_AbstractStringBuilder_string += ' [';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(builder, args[i++]);
    while (i < args.length) {
      builder.java_lang_AbstractStringBuilder_string += ', ';
      java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(builder, args[i++]);
    }
    builder.java_lang_AbstractStringBuilder_string += ']';
  }
  return builder.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild){
  return this$static.appendChild(newChild);
}

function com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(this$static, className){
  var idx, oldClassName;
  className = com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className);
  oldClassName = this$static.className || '';
  idx = com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, oldClassName + ' ' + className):com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className);
    return true;
  }
  return false;
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function com_google_gwt_dom_client_Element_$getSubPixelScrollWidth__Lcom_google_gwt_dom_client_Element_2D(this$static){
  return this$static.scrollWidth || 0;
}

function com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static, className){
  this$static.className = className || '';
}

function com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function com_google_gwt_dom_client_Element_$setScrollTop__Lcom_google_gwt_dom_client_Element_2IV(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function com_google_gwt_dom_client_Element_indexOfName__Ljava_lang_String_2Ljava_lang_String_2I(nameList, name_0){
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

function com_google_gwt_dom_client_Element_trimClassName__Ljava_lang_String_2Ljava_lang_String_2(className){
  className = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(className);
  return className;
}

function com_google_gwt_dom_client_DOMImpl_$eventStopPropagation__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_NativeEvent_2V(evt){
  evt.stopPropagation();
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function com_google_gwt_dom_client_DOMImpl_$touchGetSubPixelPageX__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Touch_2D(touch){
  return touch.pageX || 0;
}

function com_google_gwt_dom_client_DOMImpl_$touchGetSubPixelPageY__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Touch_2D(touch){
  return touch.pageY || 0;
}

function com_google_gwt_dom_client_DOMImplStandard_$dispatchEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_NativeEvent_2V(target, evt){
  target.dispatchEvent(evt);
}

function com_google_gwt_dom_client_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2V(evt){
  evt.preventDefault();
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.textContent = text_0 || '';
}

function com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2(doc, source){
  var elem;
  elem = doc.createElement('script');
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, source);
  return elem;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(event_0){
  return event_0.currentTarget || $wnd;
}

function com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I(elem){
  var left;
  left = (elem.scrollLeft || 0) | 0;
  com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem) && (left = -left);
  return left;
}

function com_google_gwt_dom_client_DOMImplIE9_$setScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2IV(elem, left){
  com_google_gwt_dom_client_DOMImplStandardBase_$isRTL__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Element_2Z(elem) && (left = -left);
  elem.scrollLeft = left;
}

function com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent_0, child){
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

function com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_11)?this$static.documentElement:this$static.body).clientHeight | 0;
}

function com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I(this$static){
  return (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.compatMode, $intern_11)?this$static.documentElement:this$static.body).clientWidth | 0;
}

function com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2(this$static, elementId){
  return this$static.getElementById(elementId);
}

function com_google_gwt_dom_client_ImageElement_$setSrc__Lcom_google_gwt_dom_client_ImageElement_2Ljava_lang_String_2V(this$static, src_0){
  this$static.src = src_0;
}

function com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function java_lang_Enum_$name__Ljava_lang_Enum_2Ljava_lang_String_2(this$static){
  return this$static.java_lang_Enum_name != null?this$static.java_lang_Enum_name:'' + this$static.java_lang_Enum_ordinal;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

function java_lang_Enum_createValueOfMap___3Ljava_lang_Enum_2Lcom_google_gwt_core_client_JavaScriptObject_2(enumConstants){
  var result, value_0, value$index, value$max;
  result = {};
  for (value$index = 0 , value$max = enumConstants.length; value$index < value$max; ++value$index) {
    value_0 = enumConstants[value$index];
    result[':' + (value_0.java_lang_Enum_name != null?value_0.java_lang_Enum_name:'' + value_0.java_lang_Enum_ordinal)] = value_0;
  }
  return result;
}

function java_lang_Enum_valueOf__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_Enum_2(map_0, name_0){
  var result;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(name_0);
  result = map_0[':' + name_0];
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalArgument__ZLjava_lang_String_2_3Ljava_lang_Object_2V(!!result, com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, 1), $intern_12, 1, 3, [name_0]));
  return result;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(8, 1, {3:1, 11:1, 8:1});
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I$ = function java_lang_Enum_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Enum', 8);
function com_google_gwt_dom_client_Style$Overflow_$clinit__V(){
  com_google_gwt_dom_client_Style$Overflow_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Overflow_VISIBLE = new com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_HIDDEN = new com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_SCROLL = new com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Overflow_AUTO = new com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Overflow_values___3Lcom_google_gwt_dom_client_Style$Overflow_2(){
  com_google_gwt_dom_client_Style$Overflow_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow_12_1classLit, 1), $intern_12, 34, 0, [com_google_gwt_dom_client_Style$Overflow_VISIBLE, com_google_gwt_dom_client_Style$Overflow_HIDDEN, com_google_gwt_dom_client_Style$Overflow_SCROLL, com_google_gwt_dom_client_Style$Overflow_AUTO]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(34, 8, $intern_13);
var com_google_gwt_dom_client_Style$Overflow_AUTO, com_google_gwt_dom_client_Style$Overflow_HIDDEN, com_google_gwt_dom_client_Style$Overflow_SCROLL, com_google_gwt_dom_client_Style$Overflow_VISIBLE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow', 34, com_google_gwt_dom_client_Style$Overflow_values___3Lcom_google_gwt_dom_client_Style$Overflow_2);
function com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'VISIBLE', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(182, 34, $intern_13, com_google_gwt_dom_client_Style$Overflow$1_Style$Overflow$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/1', 182, null);
function com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'HIDDEN', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(183, 34, $intern_13, com_google_gwt_dom_client_Style$Overflow$2_Style$Overflow$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/2', 183, null);
function com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'SCROLL', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(184, 34, $intern_13, com_google_gwt_dom_client_Style$Overflow$3_Style$Overflow$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/3', 184, null);
function com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Overflow_Style$Overflow__Ljava_lang_String_2IV.call(this, 'AUTO', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(185, 34, $intern_13, com_google_gwt_dom_client_Style$Overflow$4_Style$Overflow$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Overflow$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Overflow/4', 185, null);
function com_google_gwt_dom_client_Style$Position_$clinit__V(){
  com_google_gwt_dom_client_Style$Position_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$Position_STATIC = new com_google_gwt_dom_client_Style$Position$1_Style$Position$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Position_RELATIVE = new com_google_gwt_dom_client_Style$Position$2_Style$Position$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Position_ABSOLUTE = new com_google_gwt_dom_client_Style$Position$3_Style$Position$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$Position_FIXED = new com_google_gwt_dom_client_Style$Position$4_Style$Position$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$Position_values___3Lcom_google_gwt_dom_client_Style$Position_2(){
  com_google_gwt_dom_client_Style$Position_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position_12_1classLit, 1), $intern_12, 35, 0, [com_google_gwt_dom_client_Style$Position_STATIC, com_google_gwt_dom_client_Style$Position_RELATIVE, com_google_gwt_dom_client_Style$Position_ABSOLUTE, com_google_gwt_dom_client_Style$Position_FIXED]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(35, 8, $intern_15);
var com_google_gwt_dom_client_Style$Position_ABSOLUTE, com_google_gwt_dom_client_Style$Position_FIXED, com_google_gwt_dom_client_Style$Position_RELATIVE, com_google_gwt_dom_client_Style$Position_STATIC;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position', 35, com_google_gwt_dom_client_Style$Position_values___3Lcom_google_gwt_dom_client_Style$Position_2);
function com_google_gwt_dom_client_Style$Position$1_Style$Position$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'STATIC', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(186, 35, $intern_15, com_google_gwt_dom_client_Style$Position$1_Style$Position$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/1', 186, null);
function com_google_gwt_dom_client_Style$Position$2_Style$Position$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'RELATIVE', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(187, 35, $intern_15, com_google_gwt_dom_client_Style$Position$2_Style$Position$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/2', 187, null);
function com_google_gwt_dom_client_Style$Position$3_Style$Position$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'ABSOLUTE', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(188, 35, $intern_15, com_google_gwt_dom_client_Style$Position$3_Style$Position$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/3', 188, null);
function com_google_gwt_dom_client_Style$Position$4_Style$Position$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$Position_Style$Position__Ljava_lang_String_2IV.call(this, 'FIXED', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(189, 35, $intern_15, com_google_gwt_dom_client_Style$Position$4_Style$Position$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$Position$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/Position/4', 189, null);
function com_google_gwt_dom_client_Style$TextAlign_$clinit__V(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_dom_client_Style$TextAlign_CENTER = new com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_JUSTIFY = new com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_LEFT = new com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_RIGHT = new com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit, 1), $intern_12, 36, 0, [com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(36, 8, $intern_16);
var com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/TextAlign', 36, com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2);
function com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(190, 36, $intern_16, com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/TextAlign/1', 190, null);
function com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(191, 36, $intern_16, com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/TextAlign/2', 191, null);
function com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(192, 36, $intern_16, com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/TextAlign/3', 192, null);
function com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(193, 36, $intern_16, com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_14, 'Style/TextAlign/4', 193, null);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(244, 1, {});
_.toString__Ljava_lang_String_2$ = function com_google_web_bindery_event_shared_Event_toString__Ljava_lang_String_2(){
  return 'An event type';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'Event', 244);
function com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, source){
  this$static.com_google_web_bindery_event_shared_Event_source = source;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(245, 244, {});
_.revive__V = function com_google_gwt_event_shared_GwtEvent_revive__V(){
  this.com_google_gwt_event_shared_GwtEvent_dead = false;
  this.com_google_web_bindery_event_shared_Event_source = null;
}
;
_.com_google_gwt_event_shared_GwtEvent_dead = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'GwtEvent', 245);
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    types = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), 6);
    if (types) {
      for (type$iterator = types.iterator__Ljava_util_Iterator_2(); type$iterator.hasNext__Z();) {
        type_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(type$iterator.next__Ljava_lang_Object_2(), 58);
        currentNative = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
        currentRelativeElem = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
        com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
      }
    }
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(253, 245, {});
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return this.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2();
}
;
var com_google_gwt_event_dom_client_DomEvent_registered;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'DomEvent', 253);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(153, 1, {});
_.hashCode__I$ = function com_google_web_bindery_event_shared_Event$Type_hashCode__I(){
  return this.com_google_web_bindery_event_shared_Event$Type_index;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_web_bindery_event_shared_Event$Type_toString__Ljava_lang_String_2(){
  return 'Event type';
}
;
_.com_google_web_bindery_event_shared_Event$Type_index = 0;
var com_google_web_bindery_event_shared_Event$Type_nextHashCode = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'Event/Type', 153);
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_web_bindery_event_shared_Event$Type_index = ++com_google_web_bindery_event_shared_Event$Type_nextHashCode;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(54, 153, {}, com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'GwtEvent/Type', 54);
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(eventName, flyweight){
  var types;
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  types = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, eventName), 6);
  if (!types) {
    types = new java_util_ArrayList_ArrayList__V;
    com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, eventName, types);
  }
  types.add__Ljava_lang_Object_2Z(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = eventName;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(58, 54, {58:1}, com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'DomEvent/Type', 58);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(254, 253, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1HumanInputEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'HumanInputEvent', 254);
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[key] = value_0;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(214, 1, {}, com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'PrivateMap', 214);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(255, 254, {});
var com_google_gwt_event_dom_client_TouchEvent_impl;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchEvent', 255);
function com_google_gwt_event_dom_client_TouchCancelEvent_$clinit__V(){
  com_google_gwt_event_dom_client_TouchCancelEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_event_dom_client_TouchCancelEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V($intern_20, new com_google_gwt_event_dom_client_TouchCancelEvent_TouchCancelEvent__V);
}

function com_google_gwt_event_dom_client_TouchCancelEvent_TouchCancelEvent__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(213, 255, {}, com_google_gwt_event_dom_client_TouchCancelEvent_TouchCancelEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_TouchCancelEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_touch_client_TouchScroller_$onTouchEnd__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 265).com_google_gwt_touch_client_TouchScroller$5_this$01);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_TouchCancelEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_TouchCancelEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_TouchCancelEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchCancelEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchCancelEvent', 213);
function com_google_gwt_event_dom_client_TouchEndEvent_$clinit__V(){
  com_google_gwt_event_dom_client_TouchEndEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_event_dom_client_TouchEndEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('touchend', new com_google_gwt_event_dom_client_TouchEndEvent_TouchEndEvent__V);
}

function com_google_gwt_event_dom_client_TouchEndEvent_TouchEndEvent__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(212, 255, {}, com_google_gwt_event_dom_client_TouchEndEvent_TouchEndEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_TouchEndEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_touch_client_TouchScroller_$onTouchEnd__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 264).com_google_gwt_touch_client_TouchScroller$4_this$01);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_TouchEndEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_TouchEndEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_TouchEndEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchEndEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchEndEvent', 212);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(209, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchEvent$TouchSupportDetector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchEvent/TouchSupportDetector', 209);
function com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetectorNo_TouchEvent$TouchSupportDetectorNo__V(){
  var com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_TouchEvent$TouchSupportDetector__V_com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_$detectTouchSupport__Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2Z_elem_0_0;
  com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_TouchEvent$TouchSupportDetector__V_com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_$detectTouchSupport__Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2Z_elem_0_0 = document.createElement('div');
  com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_TouchEvent$TouchSupportDetector__V_com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_$detectTouchSupport__Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2Z_elem_0_0.setAttribute('ontouchstart', 'return;');
  typeof com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_TouchEvent$TouchSupportDetector__V_com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_$detectTouchSupport__Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2Z_elem_0_0.ontouchstart == 'function';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(210, 209, {}, com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetectorNo_TouchEvent$TouchSupportDetectorNo__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchEvent$TouchSupportDetectorNo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchEvent/TouchSupportDetectorNo', 210);
function com_google_gwt_event_dom_client_TouchMoveEvent_$clinit__V(){
  com_google_gwt_event_dom_client_TouchMoveEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_event_dom_client_TouchMoveEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V('touchmove', new com_google_gwt_event_dom_client_TouchMoveEvent_TouchMoveEvent__V);
}

function com_google_gwt_event_dom_client_TouchMoveEvent_$dispatch__Lcom_google_gwt_event_dom_client_TouchMoveEvent_2Lcom_google_gwt_event_dom_client_TouchMoveHandler_2V(this$static, handler){
  com_google_gwt_touch_client_TouchScroller_$onTouchMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(handler.com_google_gwt_touch_client_TouchScroller$3_this$01, this$static);
}

function com_google_gwt_event_dom_client_TouchMoveEvent_TouchMoveEvent__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(211, 255, {}, com_google_gwt_event_dom_client_TouchMoveEvent_TouchMoveEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_TouchMoveEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_TouchMoveEvent_$dispatch__Lcom_google_gwt_event_dom_client_TouchMoveEvent_2Lcom_google_gwt_event_dom_client_TouchMoveHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 263));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_TouchMoveEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_TouchMoveEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_TouchMoveEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchMoveEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchMoveEvent', 211);
function com_google_gwt_event_dom_client_TouchStartEvent_$clinit__V(){
  com_google_gwt_event_dom_client_TouchStartEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_event_dom_client_TouchStartEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V($intern_21, new com_google_gwt_event_dom_client_TouchStartEvent_TouchStartEvent__V);
}

function com_google_gwt_event_dom_client_TouchStartEvent_$dispatch__Lcom_google_gwt_event_dom_client_TouchStartEvent_2Lcom_google_gwt_event_dom_client_TouchStartHandler_2V(this$static, handler){
  com_google_gwt_touch_client_TouchScroller_$onTouchStart__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(handler.com_google_gwt_touch_client_TouchScroller$2_this$01, this$static);
}

function com_google_gwt_event_dom_client_TouchStartEvent_TouchStartEvent__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(208, 255, {}, com_google_gwt_event_dom_client_TouchStartEvent_TouchStartEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_TouchStartEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_dom_client_TouchStartEvent_$dispatch__Lcom_google_gwt_event_dom_client_TouchStartEvent_2Lcom_google_gwt_event_dom_client_TouchStartHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 262));
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_TouchStartEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_TouchStartEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_TouchStartEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1TouchStartEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_19, 'TouchStartEvent', 208);
function com_google_gwt_event_logical_shared_AttachEvent_$dispatch__Lcom_google_gwt_event_logical_shared_AttachEvent_2Lcom_google_gwt_event_logical_shared_AttachEvent$Handler_2V(this$static, handler){
  this$static.com_google_gwt_event_logical_shared_AttachEvent_attached?com_google_gwt_touch_client_TouchScroller_$setupBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(handler.com_google_gwt_touch_client_TouchScroller$1_this$01):com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(handler.com_google_gwt_touch_client_TouchScroller$1_this$01);
}

function com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV(attached){
  this.com_google_gwt_event_logical_shared_AttachEvent_attached = attached;
}

function com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(source, attached){
  var event_0;
  if (com_google_gwt_event_logical_shared_AttachEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV(attached);
    !!source.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(195, 245, {}, com_google_gwt_event_logical_shared_AttachEvent_AttachEvent__ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_AttachEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_event_logical_shared_AttachEvent_$dispatch__Lcom_google_gwt_event_logical_shared_AttachEvent_2Lcom_google_gwt_event_logical_shared_AttachEvent$Handler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 261));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_AttachEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_AttachEvent_TYPE;
}
;
_.com_google_gwt_event_logical_shared_AttachEvent_attached = false;
var com_google_gwt_event_logical_shared_AttachEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1AttachEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'AttachEvent', 195);
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(194, 245, {}, com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 257);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'CloseEvent', 194);
function com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV(){
}

function com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_ResizeEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(217, 245, {}, com_google_gwt_event_logical_shared_ResizeEvent_ResizeEvent__IIV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_ResizeEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_touch_client_TouchScroller$MomentumCommand_$finish__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 258).com_google_gwt_touch_client_TouchScroller$MomentumCommand$1_this$11);
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_ResizeEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_ResizeEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1ResizeEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'ResizeEvent', 217);
function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return new com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, type_0, handler));
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  var e, oldSource;
  !event_0.com_google_gwt_event_shared_GwtEvent_dead || event_0.revive__V();
  oldSource = event_0.com_google_web_bindery_event_shared_Event_source;
  com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(event_0, this$static.com_google_gwt_event_shared_HandlerManager_source);
  try {
    com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event_0);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 55)) {
      e = $e0;
      throw new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(e.com_google_web_bindery_event_shared_UmbrellaException_causes);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    oldSource == null?(event_0.com_google_gwt_event_shared_GwtEvent_dead = true , event_0.com_google_web_bindery_event_shared_Event_source = null):(event_0.com_google_web_bindery_event_shared_Event_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(this$static, e){
  return com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, e);
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV.call(this, source, false);
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(source, fireInReverseOrder){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(fireInReverseOrder);
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(63, 1, {22:1}, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'HandlerManager', 63);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(246, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1EventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'EventBus', 246);
function com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, command){
  !this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  if (!type_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a handler with a null type');
  }
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, null, handler);
  return new com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot fire null event');
  }
  try {
    ++this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    handlers = com_google_web_bindery_event_shared_SimpleEventBus_$getDispatchList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event_0.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2());
    causes = null;
    it = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.hasPrevious__Z():it.hasNext__Z()) {
      handler = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.previous__Ljava_lang_Object_2():it.next__Ljava_lang_Object_2();
      try {
        event_0.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 50));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(causes, e);
        }
         else 
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    if (causes) {
      throw new com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes);
    }
  }
   finally {
    --this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth == 0 && com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l, removed, com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  removed = l.remove__Ljava_lang_Object_2Z(handler);
  removed && l.isEmpty__Z() && (com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.remove__Ljava_lang_Object_2Ljava_lang_Object_2(source), 6) , com_google_web_bindery_event_shared_SimpleEventBus_$prune__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2V_sourceMap_0.isEmpty__Z() && java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0) , undefined);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(sourceMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(source), 6);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    sourceMap.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(source, handlers);
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getDispatchList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0){
  var directHandlers;
  directHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, null);
  return directHandlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(sourceMap.get__Ljava_lang_Object_2Ljava_lang_Object_2(source), 6);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        c = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(c$iterator.java_util_AbstractList$IteratorImpl_i < c$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(c$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(c$iterator.java_util_AbstractList$IteratorImpl_last = c$iterator.java_util_AbstractList$IteratorImpl_i++), 219));
        c.execute__V();
      }
    }
     finally {
      this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$isEventHandled__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Z(this$static, eventKey){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, eventKey);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(154, 246, {});
_.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'SimpleEventBus', 154);
function com_google_gwt_event_shared_HandlerManager$Bus_$doRemove__Lcom_google_gwt_event_shared_HandlerManager$Bus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, source, handler)):com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler);
}

function com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(fireInReverseOrder){
  this.com_google_web_bindery_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = fireInReverseOrder;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(155, 154, {}, com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$Bus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'HandlerManager/Bus', 155);
function com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(real){
  this.com_google_gwt_event_shared_LegacyHandlerWrapper_real = real;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(207, 1, {260:1}, com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1LegacyHandlerWrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'LegacyHandlerWrapper', 207);
function com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes), com_google_web_bindery_event_shared_UmbrellaException_makeCause__Ljava_util_Set_2Ljava_lang_Throwable_2(causes));
  this.com_google_web_bindery_event_shared_UmbrellaException_causes = causes;
}

function com_google_web_bindery_event_shared_UmbrellaException_makeCause__Ljava_util_Set_2Ljava_lang_Throwable_2(causes){
  var iterator;
  iterator = causes.iterator__Ljava_util_Iterator_2();
  if (!iterator.hasNext__Z()) {
    return null;
  }
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iterator.next__Ljava_lang_Object_2(), 4);
}

function com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes){
  var b, count, first, t, t$iterator;
  count = causes.size__I();
  if (count == 0) {
    return null;
  }
  b = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(t$iterator.next__Ljava_lang_Object_2(), 4);
    first?(first = false):(b.java_lang_AbstractStringBuilder_string += '; ' , b);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(b, t.getMessage__Ljava_lang_String_2());
  }
  return b.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(55, 12, $intern_23, com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, $intern_24, 55);
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(97, 55, $intern_23, com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, $intern_24, 97);
function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(value_0){
  if (null == value_0) {
    throw new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('encodedURLComponent cannot be null');
  }
}

function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'dir');
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('rtl', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('ltr', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(elem, 'dir', '');
        break;
      }

  }
}

function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('RTL', 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('LTR', 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('DEFAULT', 2);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, 1), $intern_12, 65, 0, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(65, 8, {65:1, 3:1, 11:1, 8:1}, com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV);
var com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('com.google.gwt.i18n.client', 'HasDirection/Direction', 65, com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(249, 1, {});
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONValue_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return null;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONValue_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return null;
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONValue_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return null;
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONValue_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return null;
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONValue_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONValue', 249);
function com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index_0){
  var v = this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0];
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(this$static, index_0, value_0){
  var previous;
  previous = com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index_0);
  com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(this$static, index_0, value_0);
  return previous;
}

function com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0] = value_0;
}

function com_google_gwt_json_client_JSONArray_JSONArray__V(){
  this.com_google_gwt_json_client_JSONArray_jsArray = [];
}

function com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(arr){
  this.com_google_gwt_json_client_JSONArray_jsArray = arr;
}

function com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONArray_jsArray;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(39, 249, {39:1}, com_google_gwt_json_client_JSONArray_JSONArray__V, com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 39)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONArray_jsArray == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 39).com_google_gwt_json_client_JSONArray_jsArray;
}
;
_.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONArray_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONArray_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this.com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONArray_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONArray_toString__Ljava_lang_String_2(){
  var c, i, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  for (i = 0 , c = this.com_google_gwt_json_client_JSONArray_jsArray.length; i < c; i++) {
    i > 0 && (sb.java_lang_AbstractStringBuilder_string += ',' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this, i));
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONArray', 39);
function com_google_gwt_json_client_JSONBoolean_$clinit__V(){
  com_google_gwt_json_client_JSONBoolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONBoolean_FALSE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(false);
  com_google_gwt_json_client_JSONBoolean_TRUE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(true);
}

function com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(value_0){
  this.com_google_gwt_json_client_JSONBoolean_value = value_0;
}

function com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z(value_0){
  return value_0.com_google_gwt_json_client_JSONBoolean_value;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(105, 249, {}, com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV);
_.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONBoolean_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONBoolean_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONBoolean_toString__Ljava_lang_String_2(){
  return java_lang_Boolean_$clinit__V() , '' + this.com_google_gwt_json_client_JSONBoolean_value;
}
;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONBoolean', 105);
function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(cause){
  this.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2(cause);
  this.java_lang_Throwable_cause = cause;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(81, 12, $intern_5, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONException', 81);
function com_google_gwt_json_client_JSONNull_$clinit__V(){
  com_google_gwt_json_client_JSONNull_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONNull_instance = new com_google_gwt_json_client_JSONNull_JSONNull__V;
}

function com_google_gwt_json_client_JSONNull_JSONNull__V(){
}

function com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return null;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(196, 249, {}, com_google_gwt_json_client_JSONNull_JSONNull__V);
_.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNull_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONNull_toString__Ljava_lang_String_2(){
  return $intern_7;
}
;
var com_google_gwt_json_client_JSONNull_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONNull', 196);
function com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0){
  this.com_google_gwt_json_client_JSONNumber_value = value_0;
}

function com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D(value_0){
  return value_0.com_google_gwt_json_client_JSONNumber_value;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(20, 249, {20:1}, com_google_gwt_json_client_JSONNumber_JSONNumber__DV);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 20)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 20).com_google_gwt_json_client_JSONNumber_value;
}
;
_.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNumber_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONNumber_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI((new java_lang_Double_Double__DV(this.com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value);
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONNumber_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONNumber_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_json_client_JSONNumber_value + '';
}
;
_.com_google_gwt_json_client_JSONNumber_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONNumber', 20);
function com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, result){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  if (key == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  return com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key);
}

function com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  var ret = func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  return ret;
}

function com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key, jsonValue){
  var previous;
  previous = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key);
  com_google_gwt_json_client_JSONObject_$put0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2V(this$static, key, jsonValue);
  return previous;
}

function com_google_gwt_json_client_JSONObject_$put0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2V(this$static, key, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    this$static.com_google_gwt_json_client_JSONObject_jsObject[key] = func(value_0);
  }
   else {
    delete this$static.com_google_gwt_json_client_JSONObject_jsObject[key];
  }
}

function com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  first = true;
  keys_0 = com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_12, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.java_lang_AbstractStringBuilder_string += ', ' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(key));
    sb.java_lang_AbstractStringBuilder_string += ':';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_json_client_JSONObject_JSONObject__V(){
  com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V.call(this, {});
}

function com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsValue){
  this.com_google_gwt_json_client_JSONObject_jsObject = jsValue;
}

function com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONObject_jsObject;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(30, 249, {30:1}, com_google_gwt_json_client_JSONObject_JSONObject__V, com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 30)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONObject_jsObject == com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 30).com_google_gwt_json_client_JSONObject_jsObject;
}
;
_.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONObject_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONObject_hashCode__I(){
  return com_google_gwt_core_client_impl_Impl_getHashCode__Ljava_lang_Object_2I(this.com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONObject_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONObject_toString__Ljava_lang_String_2(){
  return com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONObject', 30);
function com_google_gwt_json_client_JSONParser_$clinit__V(){
  com_google_gwt_json_client_JSONParser_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_json_client_JSONParser_typeMap = {'boolean':com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2, number:com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2, string:com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2, object:com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'function':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, undefined:com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2};
}

function com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2(v){
  return com_google_gwt_json_client_JSONBoolean_$clinit__V() , v?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE;
}

function com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(v);
}

function com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(o){
  if (!o) {
    return com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
    return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
   else {
    return new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
}

function com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(v);
}

function com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2(){
  return null;
}

function com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_26 + e);
    }
  }
   else {
    json = com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_26 + e);
    }
  }
  var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  var ex;
  if (jsonString == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  if (jsonString.length == 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('empty argument');
  }
  try {
    return com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString, true);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 37)) {
      ex = $e0;
      throw new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(ex);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V(message){
  throw new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message);
}

function com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  throw new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var com_google_gwt_json_client_JSONParser_typeMap;
function com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0){
  if (value_0 == null) {
    throw new java_lang_NullPointerException_NullPointerException__V;
  }
  this.com_google_gwt_json_client_JSONString_value = value_0;
}

function com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2(value_0){
  return value_0.com_google_gwt_json_client_JSONString_value;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(16, 249, {16:1}, com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 16)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 16).com_google_gwt_json_client_JSONString_value);
}
;
_.package_private$com_google_gwt_json_client_JSONValue$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONString_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2;
}
;
_.hashCode__I$ = function com_google_gwt_json_client_JSONString_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_json_client_JSONString_value);
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONString_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_json_client_JSONString_toString__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_25, 'JSONString', 16);
function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz$ = arrayClass;
  array.java_lang_Object_castableTypeMap$ = castableTypeMap;
  array.java_lang_Object_typeMarker$ = com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
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

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0)) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

      case 2:
        if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0))) {
          throw new java_lang_ArrayStoreException_ArrayStoreException__V;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(value_0) && !com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(value_0)) && !com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, elementTypeId)) {
            throw new java_lang_ArrayStoreException_ArrayStoreException__V;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse){
  if (e && typeof e == $intern_0) {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 37)) {
    jse = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 37);
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) !== com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2((com_google_gwt_core_client_JavaScriptException_$clinit__V() , com_google_gwt_core_client_JavaScriptException_NOT_1SET))) {
      return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(jse.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:jse.com_google_gwt_core_client_JavaScriptException_e;
    }
  }
  return e;
}

function com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var jse;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 4)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Throwable_2Ljava_lang_Object_2V(jse, e);
    com_google_gwt_lang_Exceptions_cacheJavaScriptException__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2V(e, jse);
  }
  return jse;
}

function com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_27;
  a1 = value_0 >> 22 & $intern_27;
  a2 = value_0 < 0?$intern_28:0;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
}

function com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h);
}

function com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(l, m, h){
  return {l:l, m:m, h:h};
}

function com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
    return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  }
  if (b.h == $intern_29 && b.m == 0 && b.l == 0) {
    return com_google_gwt_lang_LongLibBase_divModByMinValue__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(b);
    negative = true;
  }
  bpower = com_google_gwt_lang_LongLibBase_powerOfTwo__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_29 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2((com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
      negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(c);
      computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return com_google_gwt_lang_LongLibBase_divModByShift__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b)) {
    computeRemainder && (aIsNegative?(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a)):(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h)));
    return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  }
  return com_google_gwt_lang_LongLibBase_divModHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(aIsCopy?a:com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function com_google_gwt_lang_LongLibBase_divModByMinValue__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, computeRemainder){
  if (a.h == $intern_29 && a.m == 0 && a.l == 0) {
    computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0));
    return com_google_gwt_lang_LongLibBase_create__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2((com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ONE));
  }
  computeRemainder && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h));
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
}

function com_google_gwt_lang_LongLibBase_divModByShift__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(c);
  if (computeRemainder) {
    a = com_google_gwt_lang_LongLibBase_maskRight__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bpower);
    aIsNegative?(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a)):(com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h));
  }
  return c;
}

function com_google_gwt_lang_LongLibBase_divModHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZZZZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0;
  shift_0 = com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(b) - com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a);
  bshift = com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(b, shift_0);
  quotient = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, 0);
  while (shift_0 >= 0) {
    gte = com_google_gwt_lang_LongLibBase_trialSubtract__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 = bshift.m;
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 = bshift.h;
    com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0 = bshift.l;
    com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(bshift, com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 >>> 1);
    bshift.m = com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 >>> 1 | (com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a2_0 & 1) << 21;
    bshift.l = com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a0_0 >>> 1 | (com_google_gwt_lang_LongLibBase_toShru1__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V_a1_0 & 1) << 21;
    --shift_0;
  }
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a);
      aIsMinValue && (com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_LongLibBase_remainder, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ONE)));
    }
     else {
      com_google_gwt_lang_LongLibBase_remainder = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function com_google_gwt_lang_LongLibBase_maskRight__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, bits){
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
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(b0, b1, b2);
}

function com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_27;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_27;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_28;
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg0);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg1);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, neg2);
}

function com_google_gwt_lang_LongLibBase_numberOfLeadingZeros__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  var b1, b2;
  b2 = java_lang_Integer_numberOfLeadingZeros__II(a.h);
  if (b2 == 32) {
    b1 = java_lang_Integer_numberOfLeadingZeros__II(a.m);
    return b1 == 32?java_lang_Integer_numberOfLeadingZeros__II(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function com_google_gwt_lang_LongLibBase_powerOfTwo__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
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
    return java_lang_Integer_numberOfTrailingZeros__II(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return java_lang_Integer_numberOfTrailingZeros__II(h) + 44;
  }
  return -1;
}

function com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.h = x_0;
}

function com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.l = x_0;
}

function com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, x_0){
  a.m = x_0;
}

function com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  return a.l + a.m * $intern_30 + a.h * $intern_31;
}

function com_google_gwt_lang_LongLibBase_trialSubtract__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
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
  com_google_gwt_lang_LongLibBase_setL__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum0 & $intern_27);
  com_google_gwt_lang_LongLibBase_setM__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum1 & $intern_27);
  com_google_gwt_lang_LongLibBase_setH__Lcom_google_gwt_lang_LongLibBase$LongEmul_2IV(a, sum2 & $intern_28);
  return true;
}

var com_google_gwt_lang_LongLibBase_remainder;
function com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  return com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b, false);
}

function com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_ZERO;
  }
  if (value_0 < $intern_32) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MAX_1VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_31) {
    a2 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_31);
    value_0 -= a2 * $intern_31;
  }
  a1 = 0;
  if (value_0 >= $intern_30) {
    a1 = com_google_gwt_lang_Cast_round_1int__DI(value_0 / $intern_30);
    value_0 -= a1 * $intern_30;
  }
  a0 = com_google_gwt_lang_Cast_round_1int__DI(value_0);
  result = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(a0, a1, a2);
  negative && com_google_gwt_lang_LongLibBase_negate__Lcom_google_gwt_lang_LongLibBase$LongEmul_2V(result);
  return result;
}

function com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    com_google_gwt_lang_LongLib_boxedValues == null && (com_google_gwt_lang_LongLib_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit, $intern_12, 270, 256, 0, 1));
    result = com_google_gwt_lang_LongLib_boxedValues[rebase];
    !result && (result = com_google_gwt_lang_LongLib_boxedValues[rebase] = com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0));
    return result;
  }
  return com_google_gwt_lang_LongLibBase_create__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(value_0);
}

function com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b){
  return !com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, b);
}

function com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
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
  c00 = p0 & $intern_27;
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
  c0 &= $intern_27;
  c2 += c1 >> 22;
  c1 &= $intern_27;
  c2 &= $intern_28;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(c0, c1, c2);
}

function com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_27;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_27;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_28;
  return com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(neg0, neg1, neg2);
}

function com_google_gwt_lang_LongLib_shl__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
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
  return {l:res0 & $intern_27, m:res1 & $intern_27, h:res2 & $intern_28};
}

function com_google_gwt_lang_LongLib_shr__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_29) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_28:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_28:0;
    res1 = negative?$intern_27:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_27, m:res1 & $intern_27, h:res2 & $intern_28};
}

function com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_28;
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
  return {l:res0 & $intern_27, m:res1 & $intern_27, h:res2 & $intern_28};
}

function com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_27, m:sum1 & $intern_27, h:sum2 & $intern_28};
}

function com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(a){
  if (com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, (com_google_gwt_lang_LongLib$Const_$clinit__V() , com_google_gwt_lang_LongLib$Const_MIN_1VALUE))) {
    return $intern_32;
  }
  if (!com_google_gwt_lang_LongLib_gte__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(a, com_google_gwt_lang_LongLib$Const_ZERO)) {
    return -com_google_gwt_lang_LongLibBase_toDoubleHelper__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
  }
  return a.l + a.m * $intern_30 + a.h * $intern_31;
}

function com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(a){
  return a.l | a.m << 22;
}

function com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_29 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1000000000);
    rem = com_google_gwt_lang_LongLibBase_divMod__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2ZLcom_google_gwt_lang_LongLibBase$LongEmul_2(rem, tenPowerLong, true);
    digits = '' + com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLibBase_remainder);
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

function com_google_gwt_lang_LongLib_xor__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var com_google_gwt_lang_LongLib_boxedValues;
function com_google_gwt_lang_LongLib$Const_$clinit__V(){
  com_google_gwt_lang_LongLib$Const_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_lang_LongLib$Const_MAX_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2($intern_27, $intern_27, 524287);
  com_google_gwt_lang_LongLib$Const_MIN_1VALUE = com_google_gwt_lang_LongLibBase_create0__IIILcom_google_gwt_lang_LongLibBase$LongEmul_2(0, 0, $intern_29);
  com_google_gwt_lang_LongLib$Const_ONE = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(1);
  com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(2);
  com_google_gwt_lang_LongLib$Const_ZERO = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(0);
}

var com_google_gwt_lang_LongLib$Const_MAX_1VALUE, com_google_gwt_lang_LongLib$Const_MIN_1VALUE, com_google_gwt_lang_LongLib$Const_ONE, com_google_gwt_lang_LongLib$Const_ZERO;
function com_google_gwt_lang_Util_hasTypeMarker__Ljava_lang_Object_2Z(o){
  return o.java_lang_Object_typeMarker$ === com_google_gwt_lang_JavaClassHierarchySetupUtil_typeMarkerFn__V;
}

function com_google_gwt_lang_ucm_100046fdi_100046ilsa_100046GWTExternalDummy_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  com_google_gwt_logging_client_LogConfiguration_$onModuleLoad__Lcom_google_gwt_logging_client_LogConfiguration_2V(com_google_gwt_logging_client_LogConfiguration_$clinit__V());
  ucm_fdi_ilsa_client_GWTExternalProto_$clinit__V();
}

function java_util_logging_Handler_$getLevel__Ljava_util_logging_Handler_2Ljava_util_logging_Level_2(this$static){
  if (this$static.java_util_logging_Handler_level) {
    return this$static.java_util_logging_Handler_level;
  }
  return java_util_logging_Level_$clinit__V() , java_util_logging_Level_ALL;
}

function java_util_logging_Handler_$setFormatter__Ljava_util_logging_Handler_2Ljava_util_logging_Formatter_2V(this$static, newFormatter){
  this$static.java_util_logging_Handler_formatter = newFormatter;
}

function java_util_logging_Handler_$setLevel__Ljava_util_logging_Handler_2Ljava_util_logging_Level_2V(this$static, newLevel){
  this$static.java_util_logging_Handler_level = newLevel;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(62, 1, {62:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Handler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Handler', 62);
function com_google_gwt_logging_client_ConsoleLogHandler_ConsoleLogHandler__V(){
  java_util_logging_Handler_$setFormatter__Ljava_util_logging_Handler_2Ljava_util_logging_Formatter_2V(this, new com_google_gwt_logging_client_TextLogFormatter_TextLogFormatter__ZV(true));
  java_util_logging_Handler_$setLevel__Ljava_util_logging_Handler_2Ljava_util_logging_Level_2V(this, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_ALL));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(159, 62, {62:1}, com_google_gwt_logging_client_ConsoleLogHandler_ConsoleLogHandler__V);
_.publish__Ljava_util_logging_LogRecord_2V = function com_google_gwt_logging_client_ConsoleLogHandler_publish__Ljava_util_logging_LogRecord_2V(record){
  var msg;
  if (!window.console || (java_util_logging_Handler_$getLevel__Ljava_util_logging_Handler_2Ljava_util_logging_Level_2(this) , false)) {
    return;
  }
  msg = com_google_gwt_logging_client_TextLogFormatter_$format__Lcom_google_gwt_logging_client_TextLogFormatter_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2(this.java_util_logging_Handler_formatter, record);
  java_util_logging_Level_$clinit__V();
  window.console.error(msg);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1ConsoleLogHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'ConsoleLogHandler', 159);
function com_google_gwt_logging_client_DevelopmentModeLogHandler_DevelopmentModeLogHandler__V(){
  java_util_logging_Handler_$setFormatter__Ljava_util_logging_Handler_2Ljava_util_logging_Formatter_2V(this, new com_google_gwt_logging_client_TextLogFormatter_TextLogFormatter__ZV(false));
  java_util_logging_Handler_$setLevel__Ljava_util_logging_Handler_2Ljava_util_logging_Level_2V(this, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_ALL));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(160, 62, {62:1}, com_google_gwt_logging_client_DevelopmentModeLogHandler_DevelopmentModeLogHandler__V);
_.publish__Ljava_util_logging_LogRecord_2V = function com_google_gwt_logging_client_DevelopmentModeLogHandler_publish__Ljava_util_logging_LogRecord_2V(record){
  return;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1DevelopmentModeLogHandler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'DevelopmentModeLogHandler', 160);
function com_google_gwt_logging_client_LogConfiguration_$clinit__V(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_logging_client_LogConfiguration_impl = new com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_LogConfiguration$LogConfigurationImplSevere__V;
}

function com_google_gwt_logging_client_LogConfiguration_$onModuleLoad__Lcom_google_gwt_logging_client_LogConfiguration_2V(){
  var log_0;
  com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_$configureClientSideLogging__Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2V(com_google_gwt_logging_client_LogConfiguration_impl);
  if (!com_google_gwt_core_client_GWT_uncaughtExceptionHandler) {
    log_0 = java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2((java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration_12_1classLit) , com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration_12_1classLit.java_lang_Class_typeName));
    com_google_gwt_core_client_GWT_setUncaughtExceptionHandler__Lcom_google_gwt_core_client_GWT$UncaughtExceptionHandler_2V(new com_google_gwt_logging_client_LogConfiguration$1_LogConfiguration$1__Lcom_google_gwt_logging_client_LogConfiguration_2V(log_0));
  }
}

var com_google_gwt_logging_client_LogConfiguration_impl;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'LogConfiguration', null);
function com_google_gwt_logging_client_LogConfiguration$1_LogConfiguration$1__Lcom_google_gwt_logging_client_LogConfiguration_2V(val$log){
  this.com_google_gwt_logging_client_LogConfiguration$1_val$log2 = val$log;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(109, 1, {}, com_google_gwt_logging_client_LogConfiguration$1_LogConfiguration$1__Lcom_google_gwt_logging_client_LogConfiguration_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'LogConfiguration/1', 109);
function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_$configureClientSideLogging__Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2V(this$static){
  this$static.com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_root = (new com_google_gwt_logging_impl_LoggerImplSevere_LoggerImplSevere__V , java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(java_util_logging_LogManager_getLogManager__Ljava_util_logging_LogManager_2(), ''));
  this$static.com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_root.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_useParentHandlers = false;
  com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_$setLevels__Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2Ljava_util_logging_Logger_2V(this$static.com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_root);
  com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_$setDefaultHandlers__Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2Ljava_util_logging_Logger_2V(this$static.com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_root);
}

function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_$setDefaultHandlers__Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2Ljava_util_logging_Logger_2V(l){
  var console_0, dev;
  console_0 = new com_google_gwt_logging_client_ConsoleLogHandler_ConsoleLogHandler__V;
  com_google_gwt_logging_impl_LoggerImplRegular_$addHandler__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Handler_2V(l.java_util_logging_Logger_impl, console_0);
  dev = new com_google_gwt_logging_client_DevelopmentModeLogHandler_DevelopmentModeLogHandler__V;
  com_google_gwt_logging_impl_LoggerImplRegular_$addHandler__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Handler_2V(l.java_util_logging_Logger_impl, dev);
}

function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_$setLevels__Lcom_google_gwt_logging_client_LogConfiguration$LogConfigurationImplRegular_2Ljava_util_logging_Logger_2V(l){
  var level, levelParam, com_google_gwt_user_client_Window$Location_getParameter__Ljava_lang_String_2Ljava_lang_String_2_paramsForName_0;
  levelParam = (com_google_gwt_user_client_Window$Location_ensureListParameterMap__V() , com_google_gwt_user_client_Window$Location_getParameter__Ljava_lang_String_2Ljava_lang_String_2_paramsForName_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_Window$Location_listParamMap.get__Ljava_lang_Object_2Ljava_lang_Object_2('logLevel'), 6) , !com_google_gwt_user_client_Window$Location_getParameter__Ljava_lang_String_2Ljava_lang_String_2_paramsForName_0?null:com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_Window$Location_getParameter__Ljava_lang_String_2Ljava_lang_String_2_paramsForName_0.get__ILjava_lang_Object_2(com_google_gwt_user_client_Window$Location_getParameter__Ljava_lang_String_2Ljava_lang_String_2_paramsForName_0.size__I() - 1)));
  level = levelParam == null?null:(java_util_logging_Level_$clinit__V() , com_google_gwt_logging_impl_LevelImplRegular_$parse__Lcom_google_gwt_logging_impl_LevelImplRegular_2Ljava_lang_String_2Ljava_util_logging_Level_2(levelParam));
  level?com_google_gwt_logging_impl_LoggerImplRegular_$setLevel__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2V(l.java_util_logging_Logger_impl, level):java_util_logging_Logger_$setLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2V(l, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_INFO));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(232, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration$LogConfigurationImplRegular_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'LogConfiguration/LogConfigurationImplRegular', 232);
function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_LogConfiguration$LogConfigurationImplSevere__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(108, 232, {}, com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplSevere_LogConfiguration$LogConfigurationImplSevere__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration$LogConfigurationImplSevere_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'LogConfiguration/LogConfigurationImplSevere', 108);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(250, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Formatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Formatter', 250);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(251, 250, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1impl_1FormatterImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'FormatterImpl', 251);
function com_google_gwt_logging_client_TextLogFormatter_$format__Lcom_google_gwt_logging_client_TextLogFormatter_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2(this$static, event_0){
  var message, com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_date_0, com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0;
  message = new java_lang_StringBuilder_StringBuilder__V;
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(message, (com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_date_0 = new java_util_Date_Date__JV(event_0.java_util_logging_LogRecord_millis) , com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0 = new java_lang_StringBuilder_StringBuilder__V , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0, java_util_Date_$toString__Ljava_util_Date_2Ljava_lang_String_2(com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_date_0)) , com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0.java_lang_AbstractStringBuilder_string += ' ' , java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0, event_0.java_util_logging_LogRecord_loggerName) , com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0.java_lang_AbstractStringBuilder_string += '\n' , com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0.java_lang_AbstractStringBuilder_string += $intern_36 , com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0.java_lang_AbstractStringBuilder_string += ': ' , com_google_gwt_logging_impl_FormatterImpl_$getRecordInfo__Lcom_google_gwt_logging_impl_FormatterImpl_2Ljava_util_logging_LogRecord_2Ljava_lang_String_2Ljava_lang_String_2_s_0.java_lang_AbstractStringBuilder_string));
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(message, event_0.java_util_logging_LogRecord_msg);
  this$static.com_google_gwt_logging_client_TextLogFormatter_showStackTraces && !!event_0.java_util_logging_LogRecord_thrown && java_lang_Throwable_$printStackTrace__Ljava_lang_Throwable_2Ljava_io_PrintStream_2V(event_0.java_util_logging_LogRecord_thrown, new com_google_gwt_logging_impl_StackTracePrintStream_StackTracePrintStream__Ljava_lang_StringBuilder_2V(message));
  return message.java_lang_AbstractStringBuilder_string;
}

function com_google_gwt_logging_client_TextLogFormatter_TextLogFormatter__ZV(showStackTraces){
  this.com_google_gwt_logging_client_TextLogFormatter_showStackTraces = showStackTraces;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(100, 251, {}, com_google_gwt_logging_client_TextLogFormatter_TextLogFormatter__ZV);
_.com_google_gwt_logging_client_TextLogFormatter_showStackTraces = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1TextLogFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_34, 'TextLogFormatter', 100);
function com_google_gwt_logging_impl_LevelImplRegular_$parse__Lcom_google_gwt_logging_impl_LevelImplRegular_2Ljava_lang_String_2Ljava_util_logging_Level_2(name_0){
  name_0 = name_0.toUpperCase();
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'ALL')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_ALL;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'CONFIG')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_CONFIG;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'FINE')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINE;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'FINER')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINER;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'FINEST')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINEST;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'INFO')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_INFO;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'OFF')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_OFF;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, $intern_36)) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_SEVERE;
  }
   else if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(name_0, 'WARNING')) {
    return java_util_logging_Level_$clinit__V() , java_util_logging_Level_WARNING;
  }
  throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Invalid level "' + name_0 + '"');
}

function com_google_gwt_logging_impl_LoggerImplRegular_$addHandler__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Handler_2V(this$static, handler){
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_logging_impl_LoggerImplRegular_handlers, handler);
}

function com_google_gwt_logging_impl_LoggerImplRegular_$getEffectiveLevel__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2(this$static){
  var effectiveLevel, logger;
  if (this$static.com_google_gwt_logging_impl_LoggerImplRegular_level) {
    return this$static.com_google_gwt_logging_impl_LoggerImplRegular_level;
  }
  logger = this$static.com_google_gwt_logging_impl_LoggerImplRegular_parent;
  while (logger) {
    effectiveLevel = logger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_level;
    if (effectiveLevel) {
      return effectiveLevel;
    }
    logger = logger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_parent;
  }
  return java_util_logging_Level_$clinit__V() , java_util_logging_Level_INFO;
}

function com_google_gwt_logging_impl_LoggerImplRegular_$getHandlers__Lcom_google_gwt_logging_impl_LoggerImplRegular_2_3Ljava_util_logging_Handler_2(this$static){
  return com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.com_google_gwt_logging_impl_LoggerImplRegular_handlers, com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Handler_12_1classLit, $intern_37, 62, this$static.com_google_gwt_logging_impl_LoggerImplRegular_handlers.java_util_ArrayList_array.length, 0, 1)), 107);
}

function com_google_gwt_logging_impl_LoggerImplRegular_$log__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(this$static, msg, thrown){
  var record;
  if (com_google_gwt_logging_impl_LoggerImplRegular_$getEffectiveLevel__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2(this$static).intValue__I() <= 1000) {
    record = new java_util_logging_LogRecord_LogRecord__Ljava_util_logging_Level_2Ljava_lang_String_2V(msg);
    record.java_util_logging_LogRecord_thrown = thrown;
    java_util_logging_LogRecord_$setLoggerName__Ljava_util_logging_LogRecord_2Ljava_lang_String_2V(record, this$static.com_google_gwt_logging_impl_LoggerImplRegular_name);
    com_google_gwt_logging_impl_LoggerImplRegular_$log__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_LogRecord_2V(this$static, record);
  }
}

function com_google_gwt_logging_impl_LoggerImplRegular_$log__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_LogRecord_2V(this$static, record){
  var handler, handler$array, handler$array0, handler$index, handler$index0, handler$max, handler$max0, logger;
  if (com_google_gwt_logging_impl_LoggerImplRegular_$getEffectiveLevel__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2(this$static).intValue__I() <= 1000) {
    for (handler$array0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static.com_google_gwt_logging_impl_LoggerImplRegular_handlers, com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Handler_12_1classLit, $intern_37, 62, this$static.com_google_gwt_logging_impl_LoggerImplRegular_handlers.java_util_ArrayList_array.length, 0, 1)), 107) , handler$index0 = 0 , handler$max0 = handler$array0.length; handler$index0 < handler$max0; ++handler$index0) {
      handler = handler$array0[handler$index0];
      handler.publish__Ljava_util_logging_LogRecord_2V(record);
    }
    logger = this$static.com_google_gwt_logging_impl_LoggerImplRegular_useParentHandlers?this$static.com_google_gwt_logging_impl_LoggerImplRegular_parent:null;
    while (logger) {
      for (handler$array = com_google_gwt_logging_impl_LoggerImplRegular_$getHandlers__Lcom_google_gwt_logging_impl_LoggerImplRegular_2_3Ljava_util_logging_Handler_2(logger.java_util_logging_Logger_impl) , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
        handler = handler$array[handler$index];
        handler.publish__Ljava_util_logging_LogRecord_2V(record);
      }
      logger = logger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_useParentHandlers?logger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_parent:null;
    }
  }
}

function com_google_gwt_logging_impl_LoggerImplRegular_$setLevel__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2V(this$static, newLevel){
  this$static.com_google_gwt_logging_impl_LoggerImplRegular_level = newLevel;
}

function com_google_gwt_logging_impl_LoggerImplRegular_$setName__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_lang_String_2V(this$static, newName){
  this$static.com_google_gwt_logging_impl_LoggerImplRegular_name = newName;
}

function com_google_gwt_logging_impl_LoggerImplRegular_$setParent__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Logger_2V(this$static, newParent){
  !!newParent && (this$static.com_google_gwt_logging_impl_LoggerImplRegular_parent = newParent);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(131, 1, {});
_.com_google_gwt_logging_impl_LoggerImplRegular_level = null;
_.com_google_gwt_logging_impl_LoggerImplRegular_useParentHandlers = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1impl_1LoggerImplRegular_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'LoggerImplRegular', 131);
function com_google_gwt_logging_impl_LoggerImplSevere_LoggerImplSevere__V(){
  this.com_google_gwt_logging_impl_LoggerImplRegular_useParentHandlers = true;
  this.com_google_gwt_logging_impl_LoggerImplRegular_handlers = new java_util_ArrayList_ArrayList__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(75, 131, {}, com_google_gwt_logging_impl_LoggerImplSevere_LoggerImplSevere__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1impl_1LoggerImplSevere_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'LoggerImplSevere', 75);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(240, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1io_1OutputStream_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_38, 'OutputStream', 240);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(241, 240, {});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1io_1FilterOutputStream_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_38, 'FilterOutputStream', 241);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(242, 241, {});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1io_1PrintStream_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_38, 'PrintStream', 242);
function com_google_gwt_logging_impl_StackTracePrintStream_StackTracePrintStream__Ljava_lang_StringBuilder_2V(builder){
  this.com_google_gwt_logging_impl_StackTracePrintStream_builder = builder;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(170, 242, {}, com_google_gwt_logging_impl_StackTracePrintStream_StackTracePrintStream__Ljava_lang_StringBuilder_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1impl_1StackTracePrintStream_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_35, 'StackTracePrintStream', 170);
function com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V(){
  this.com_google_gwt_safehtml_shared_SafeUriString_uri = 'Loader.gif';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(84, 1, {220:1, 84:1}, com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_safehtml_shared_SafeUriString_equals__Ljava_lang_Object_2Z(obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 220)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_safehtml_shared_SafeUriString_uri, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 220), 84).com_google_gwt_safehtml_shared_SafeUriString_uri);
}
;
_.hashCode__I$ = function com_google_gwt_safehtml_shared_SafeUriString_hashCode__I(){
  return java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_SafeUriString_uri);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1safehtml_1shared_1SafeUriString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.safehtml.shared', 'SafeUriString', 84);
function com_google_gwt_safehtml_shared_UriUtils_$clinit__V(){
  com_google_gwt_safehtml_shared_UriUtils_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

function com_google_gwt_touch_client_DefaultMomentum_$calcNewVelocity__Lcom_google_gwt_touch_client_DefaultMomentum_2DDDDD(initialVelocity, decelFactor, oldVelocity, minDecel){
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

function com_google_gwt_touch_client_DefaultMomentum_$updateState__Lcom_google_gwt_touch_client_DefaultMomentum_2Lcom_google_gwt_touch_client_Momentum$State_2Z(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.com_google_gwt_touch_client_Momentum$State_elapsedMillis;
  totalEllapsedMillis = state.com_google_gwt_touch_client_Momentum$State_cumulativeElapsedMillis;
  initialVelocity = state.com_google_gwt_touch_client_Momentum$State_initialVelocity;
  oldVelocity = state.com_google_gwt_touch_client_Momentum$State_velocity;
  decelFactor = java_lang_Math_pow__DDD(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = com_google_gwt_touch_client_DefaultMomentum_$calcNewVelocity__Lcom_google_gwt_touch_client_DefaultMomentum_2DDDDD(initialVelocity.com_google_gwt_touch_client_Point_x, decelFactor, oldVelocity.com_google_gwt_touch_client_Point_x, minDecel);
  newVelocityY = com_google_gwt_touch_client_DefaultMomentum_$calcNewVelocity__Lcom_google_gwt_touch_client_DefaultMomentum_2DDDDD(initialVelocity.com_google_gwt_touch_client_Point_y, decelFactor, oldVelocity.com_google_gwt_touch_client_Point_y, minDecel);
  newVelocity = new com_google_gwt_touch_client_Point_Point__DDV(newVelocityX, newVelocityY);
  state.com_google_gwt_touch_client_Momentum$State_velocity = newVelocity;
  elapsedMillis = state.com_google_gwt_touch_client_Momentum$State_elapsedMillis;
  dist = com_google_gwt_touch_client_Point_$mult__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(newVelocity, new com_google_gwt_touch_client_Point_Point__DDV(elapsedMillis, elapsedMillis));
  position = state.com_google_gwt_touch_client_Momentum$State_position;
  com_google_gwt_touch_client_Momentum$State_$setPosition__Lcom_google_gwt_touch_client_Momentum$State_2Lcom_google_gwt_touch_client_Point_2V(state, new com_google_gwt_touch_client_Point_Point__DDV(position.com_google_gwt_touch_client_Point_x + dist.com_google_gwt_touch_client_Point_x, position.com_google_gwt_touch_client_Point_y + dist.com_google_gwt_touch_client_Point_y));
  if (java_lang_Math_abs__DD(newVelocity.com_google_gwt_touch_client_Point_x) < 0.02 && java_lang_Math_abs__DD(newVelocity.com_google_gwt_touch_client_Point_y) < 0.02) {
    return false;
  }
  return true;
}

function com_google_gwt_touch_client_DefaultMomentum_DefaultMomentum__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(215, 1, {}, com_google_gwt_touch_client_DefaultMomentum_DefaultMomentum__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1DefaultMomentum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'DefaultMomentum', 215);
function com_google_gwt_touch_client_Momentum$State_$setCumulativeElapsedMillis__Lcom_google_gwt_touch_client_Momentum$State_2IV(this$static, cumulativeElapsedMillis){
  this$static.com_google_gwt_touch_client_Momentum$State_cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function com_google_gwt_touch_client_Momentum$State_$setElapsedMillis__Lcom_google_gwt_touch_client_Momentum$State_2IV(this$static, elapsedMillis){
  this$static.com_google_gwt_touch_client_Momentum$State_elapsedMillis = elapsedMillis;
}

function com_google_gwt_touch_client_Momentum$State_$setPosition__Lcom_google_gwt_touch_client_Momentum$State_2Lcom_google_gwt_touch_client_Point_2V(this$static, position){
  this$static.com_google_gwt_touch_client_Momentum$State_position = position;
}

function com_google_gwt_touch_client_Momentum$State_Momentum$State__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2V(initialPosition, initialVelocity){
  this.com_google_gwt_touch_client_Momentum$State_initialVelocity = initialVelocity;
  this.com_google_gwt_touch_client_Momentum$State_position = new com_google_gwt_touch_client_Point_Point__Lcom_google_gwt_touch_client_Point_2V(initialPosition);
  this.com_google_gwt_touch_client_Momentum$State_velocity = new com_google_gwt_touch_client_Point_Point__Lcom_google_gwt_touch_client_Point_2V(initialVelocity);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(216, 1, {}, com_google_gwt_touch_client_Momentum$State_Momentum$State__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2V);
_.com_google_gwt_touch_client_Momentum$State_cumulativeElapsedMillis = 0;
_.com_google_gwt_touch_client_Momentum$State_elapsedMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1Momentum$State_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'Momentum/State', 216);
function com_google_gwt_touch_client_Point_$minus__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(this$static, c){
  return new com_google_gwt_touch_client_Point_Point__DDV(this$static.com_google_gwt_touch_client_Point_x - c.com_google_gwt_touch_client_Point_x, this$static.com_google_gwt_touch_client_Point_y - c.com_google_gwt_touch_client_Point_y);
}

function com_google_gwt_touch_client_Point_$mult__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(this$static, c){
  return new com_google_gwt_touch_client_Point_Point__DDV(this$static.com_google_gwt_touch_client_Point_x * c.com_google_gwt_touch_client_Point_x, this$static.com_google_gwt_touch_client_Point_y * c.com_google_gwt_touch_client_Point_y);
}

function com_google_gwt_touch_client_Point_$plus__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(this$static, c){
  return new com_google_gwt_touch_client_Point_Point__DDV(this$static.com_google_gwt_touch_client_Point_x + c.com_google_gwt_touch_client_Point_x, this$static.com_google_gwt_touch_client_Point_y + c.com_google_gwt_touch_client_Point_y);
}

function com_google_gwt_touch_client_Point_Point__DDV(x_0, y_0){
  this.com_google_gwt_touch_client_Point_x = x_0;
  this.com_google_gwt_touch_client_Point_y = y_0;
}

function com_google_gwt_touch_client_Point_Point__Lcom_google_gwt_touch_client_Point_2V(c){
  com_google_gwt_touch_client_Point_Point__DDV.call(this, c.com_google_gwt_touch_client_Point_x, c.com_google_gwt_touch_client_Point_y);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(14, 1, {14:1}, com_google_gwt_touch_client_Point_Point__DDV, com_google_gwt_touch_client_Point_Point__Lcom_google_gwt_touch_client_Point_2V);
_.equals__Ljava_lang_Object_2Z$ = function com_google_gwt_touch_client_Point_equals__Ljava_lang_Object_2Z(obj){
  var c;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 14)) {
    return false;
  }
  c = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 14);
  return this.com_google_gwt_touch_client_Point_x == c.com_google_gwt_touch_client_Point_x && this.com_google_gwt_touch_client_Point_y == c.com_google_gwt_touch_client_Point_y;
}
;
_.hashCode__I$ = function com_google_gwt_touch_client_Point_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(this.com_google_gwt_touch_client_Point_x) ^ com_google_gwt_lang_Cast_round_1int__DI(this.com_google_gwt_touch_client_Point_y);
}
;
_.toString__Ljava_lang_String_2$ = function com_google_gwt_touch_client_Point_toString__Ljava_lang_String_2(){
  return 'Point(' + this.com_google_gwt_touch_client_Point_x + ',' + this.com_google_gwt_touch_client_Point_y + ')';
}
;
_.com_google_gwt_touch_client_Point_x = 0;
_.com_google_gwt_touch_client_Point_y = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1Point_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'Point', 14);
function com_google_gwt_touch_client_TouchScroller_$calculateEndVelocity__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2(from, to){
  var dist, time;
  time = to.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time - from.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time;
  if (time <= 0) {
    return null;
  }
  dist = com_google_gwt_touch_client_Point_$minus__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(from.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point, to.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point);
  return new com_google_gwt_touch_client_Point_Point__DDV(dist.com_google_gwt_touch_client_Point_x / time, dist.com_google_gwt_touch_client_Point_y / time);
}

function com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static){
  this$static.com_google_gwt_touch_client_TouchScroller_touching = false;
  this$static.com_google_gwt_touch_client_TouchScroller_dragging = false;
  this$static.com_google_gwt_touch_client_TouchScroller_momentumCommand = null;
}

function com_google_gwt_touch_client_TouchScroller_$getTouchFromEvent__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2Lcom_google_gwt_dom_client_Touch_2(event_0){
  var touches;
  touches = event_0.com_google_gwt_event_dom_client_DomEvent_nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function com_google_gwt_touch_client_TouchScroller_$getWidgetScrollPosition__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2(this$static){
  return new com_google_gwt_touch_client_Point_Point__DDV(com_google_gwt_user_client_ui_ScrollPanel_$getHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget), com_google_gwt_user_client_ui_ScrollPanel_$getVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget));
}

function com_google_gwt_touch_client_TouchScroller_$hitTest__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Z(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new com_google_gwt_touch_client_Point_Point__DDV(point1.com_google_gwt_touch_client_Point_x - point2.com_google_gwt_touch_client_Point_x, point1.com_google_gwt_touch_client_Point_y - point2.com_google_gwt_touch_client_Point_y);
  absDiffX = java_lang_Math_abs__DD(diff.com_google_gwt_touch_client_Point_x);
  absDiffY = java_lang_Math_abs__DD(diff.com_google_gwt_touch_client_Point_y);
  return absDiffX <= 25 && absDiffY <= 25;
}

function com_google_gwt_touch_client_TouchScroller_$isClickScrollTriggeringTouch__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this$static, clickPoint){
  if (this$static.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point) {
    return com_google_gwt_touch_client_TouchScroller_$hitTest__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Z(clickPoint, this$static.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point);
  }
  return false;
}

function com_google_gwt_touch_client_TouchScroller_$isClickTouchPositionDuringMomentum__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = com_google_gwt_core_client_JsDate_now__D();
  same = false;
  for (point$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_touch_client_TouchScroller_touchPositionsDuringMomentum); point$iterator.java_util_AbstractList$IteratorImpl_i < point$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    point = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(point$iterator.java_util_AbstractList$IteratorImpl_i < point$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(point$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(point$iterator.java_util_AbstractList$IteratorImpl_last = point$iterator.java_util_AbstractList$IteratorImpl_i++), 47));
    if (currentTime - point.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time <= 2500 && com_google_gwt_touch_client_TouchScroller_$hitTest__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Z(clickPoint, point.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point)) {
      same = true;
      break;
    }
  }
  return same;
}

function com_google_gwt_touch_client_TouchScroller_$onDragEnd__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(this$static){
  var endVelocity;
  if (!this$static.com_google_gwt_touch_client_TouchScroller_momentum) {
    return;
  }
  endVelocity = com_google_gwt_touch_client_TouchScroller_$calculateEndVelocity__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2(this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPosition, this$static.com_google_gwt_touch_client_TouchScroller_lastTouchPosition);
  if (endVelocity) {
    this$static.com_google_gwt_touch_client_TouchScroller_momentumCommand = new com_google_gwt_touch_client_TouchScroller$MomentumCommand_TouchScroller$MomentumCommand__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2V(this$static, endVelocity);
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , this$static.com_google_gwt_touch_client_TouchScroller_momentumCommand), 16);
  }
}

function com_google_gwt_touch_client_TouchScroller_$onTouchEnd__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(this$static){
  if (!this$static.com_google_gwt_touch_client_TouchScroller_touching) {
    return;
  }
  this$static.com_google_gwt_touch_client_TouchScroller_touching = false;
  if (this$static.com_google_gwt_touch_client_TouchScroller_dragging) {
    this$static.com_google_gwt_touch_client_TouchScroller_dragging = false;
    com_google_gwt_touch_client_TouchScroller_$onDragEnd__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(this$static);
  }
}

function com_google_gwt_touch_client_TouchScroller_$onTouchMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_diff_0, com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_curScrollPosition_0;
  if (!this$static.com_google_gwt_touch_client_TouchScroller_touching) {
    return;
  }
  touch = com_google_gwt_touch_client_TouchScroller_$getTouchFromEvent__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2Lcom_google_gwt_dom_client_Touch_2(event_0);
  touchPoint = new com_google_gwt_touch_client_Point_Point__DDV(com_google_gwt_dom_client_DOMImpl_$touchGetSubPixelPageX__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Touch_2D(touch) | 0, com_google_gwt_dom_client_DOMImpl_$touchGetSubPixelPageY__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Touch_2D(touch) | 0);
  touchTime = com_google_gwt_core_client_JsDate_now__D();
  com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_lastTouchPosition, touchPoint, touchTime);
  if (!this$static.com_google_gwt_touch_client_TouchScroller_dragging) {
    diff = com_google_gwt_touch_client_Point_$minus__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(touchPoint, this$static.com_google_gwt_touch_client_TouchScroller_startTouchPosition);
    absDiffX = java_lang_Math_abs__DD(diff.com_google_gwt_touch_client_Point_x);
    absDiffY = java_lang_Math_abs__DD(diff.com_google_gwt_touch_client_Point_y);
    if (absDiffX > 5 || absDiffY > 5) {
      com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition, this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point, this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time);
      if (absDiffX > absDiffY) {
        hPosition = com_google_gwt_user_client_ui_ScrollPanel_$getHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget);
        hMin = com_google_gwt_user_client_ui_ScrollPanel_$getMinimumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget);
        hMax = com_google_gwt_user_client_ui_ScrollPanel_$getMaximumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget);
        if (diff.com_google_gwt_touch_client_Point_x < 0 && hMax <= hPosition) {
          com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
          return;
        }
         else if (diff.com_google_gwt_touch_client_Point_x > 0 && hMin >= hPosition) {
          com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
          return;
        }
      }
       else {
        vPosition = com_google_gwt_user_client_ui_ScrollPanel_$getVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget);
        vMax = com_google_gwt_user_client_ui_ScrollPanel_$getMaximumVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget);
        if (diff.com_google_gwt_touch_client_Point_y < 0 && vMax <= vPosition) {
          com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
          return;
        }
         else if (diff.com_google_gwt_touch_client_Point_y > 0 && 0 >= vPosition) {
          com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
          return;
        }
      }
      this$static.com_google_gwt_touch_client_TouchScroller_dragging = true;
    }
  }
  com_google_gwt_dom_client_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2V(event_0.com_google_gwt_event_dom_client_DomEvent_nativeEvent);
  if (this$static.com_google_gwt_touch_client_TouchScroller_dragging) {
    com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_diff_0 = com_google_gwt_touch_client_Point_$minus__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(this$static.com_google_gwt_touch_client_TouchScroller_startTouchPosition, this$static.com_google_gwt_touch_client_TouchScroller_lastTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point);
    com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_curScrollPosition_0 = com_google_gwt_touch_client_Point_$plus__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2(this$static.com_google_gwt_touch_client_TouchScroller_startScrollPosition, com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_diff_0);
    com_google_gwt_user_client_ui_ScrollPanel_$setHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2IV(this$static.com_google_gwt_touch_client_TouchScroller_widget, com_google_gwt_lang_Cast_round_1int__DI(com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_curScrollPosition_0.com_google_gwt_touch_client_Point_x));
    com_google_gwt_user_client_ui_ScrollPanel_$setVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2IV(this$static.com_google_gwt_touch_client_TouchScroller_widget, com_google_gwt_lang_Cast_round_1int__DI(com_google_gwt_touch_client_TouchScroller_$onDragMove__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V_curScrollPosition_0.com_google_gwt_touch_client_Point_y));
    trackingTime = touchTime - this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPosition.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time;
    if (trackingTime > 200 && !!this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck) {
      com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPosition, this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point, this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time);
      this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck && (this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck = new com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__Lcom_google_gwt_touch_client_Point_2DV(touchPoint, touchTime));
  }
}

function com_google_gwt_touch_client_TouchScroller_$onTouchStart__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2V(this$static, event_0){
  var startTouchTime, touch;
  com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.com_google_gwt_touch_client_TouchScroller_touching) {
    return;
  }
  touch = com_google_gwt_touch_client_TouchScroller_$getTouchFromEvent__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_event_dom_client_TouchEvent_2Lcom_google_gwt_dom_client_Touch_2(event_0);
  this$static.com_google_gwt_touch_client_TouchScroller_startTouchPosition = new com_google_gwt_touch_client_Point_Point__DDV(com_google_gwt_dom_client_DOMImpl_$touchGetSubPixelPageX__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Touch_2D(touch) | 0, com_google_gwt_dom_client_DOMImpl_$touchGetSubPixelPageY__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Touch_2D(touch) | 0);
  startTouchTime = com_google_gwt_core_client_JsDate_now__D();
  com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPosition, this$static.com_google_gwt_touch_client_TouchScroller_startTouchPosition, startTouchTime);
  com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_lastTouchPosition, this$static.com_google_gwt_touch_client_TouchScroller_startTouchPosition, startTouchTime);
  this$static.com_google_gwt_touch_client_TouchScroller_recentTouchPositionOnDeck = null;
  if (this$static.com_google_gwt_touch_client_TouchScroller_momentumCommand) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_touch_client_TouchScroller_touchPositionsDuringMomentum, new com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__Lcom_google_gwt_touch_client_Point_2DV(this$static.com_google_gwt_touch_client_TouchScroller_startTouchPosition, startTouchTime));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , this$static.com_google_gwt_touch_client_TouchScroller_momentumTouchRemovalCommand), 2500);
  }
  this$static.com_google_gwt_touch_client_TouchScroller_startScrollPosition = new com_google_gwt_touch_client_Point_Point__DDV(com_google_gwt_user_client_ui_ScrollPanel_$getHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget), com_google_gwt_user_client_ui_ScrollPanel_$getVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static.com_google_gwt_touch_client_TouchScroller_widget));
  com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
  this$static.com_google_gwt_touch_client_TouchScroller_touching = true;
}

function com_google_gwt_touch_client_TouchScroller_$removeAttachHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static){
  if (this$static.com_google_gwt_touch_client_TouchScroller_attachHandlerReg) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_touch_client_TouchScroller_attachHandlerReg.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_touch_client_TouchScroller_attachHandlerReg = null;
  }
}

function com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static){
  if (this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg = null;
  }
}

function com_google_gwt_touch_client_TouchScroller_$setMomentum__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Momentum_2V(this$static, momentum){
  this$static.com_google_gwt_touch_client_TouchScroller_momentum = momentum;
}

function com_google_gwt_touch_client_TouchScroller_$setTargetWidget__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_user_client_ui_HasScrolling_2V(this$static, widget){
  var reg, reg$iterator;
  if (this$static.com_google_gwt_touch_client_TouchScroller_widget == widget) {
    return;
  }
  com_google_gwt_touch_client_TouchScroller_$cancelAll__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
  for (reg$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.com_google_gwt_touch_client_TouchScroller_handlerRegs); reg$iterator.java_util_AbstractList$IteratorImpl_i < reg$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    reg = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(reg$iterator.java_util_AbstractList$IteratorImpl_i < reg$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(reg$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(reg$iterator.java_util_AbstractList$IteratorImpl_last = reg$iterator.java_util_AbstractList$IteratorImpl_i++), 260));
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(reg.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
  }
  this$static.com_google_gwt_touch_client_TouchScroller_handlerRegs.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, 0, 3, 1);
  com_google_gwt_touch_client_TouchScroller_$removeAttachHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
  com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
  this$static.com_google_gwt_touch_client_TouchScroller_widget = widget;
  widget.com_google_gwt_user_client_ui_Widget_attached && (com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static) , this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg = com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static)));
  this$static.com_google_gwt_touch_client_TouchScroller_attachHandlerReg = com_google_gwt_user_client_ui_Widget_$addHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(widget, new com_google_gwt_touch_client_TouchScroller$1_TouchScroller$1__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static), (!com_google_gwt_event_logical_shared_AttachEvent_TYPE && (com_google_gwt_event_logical_shared_AttachEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_AttachEvent_TYPE));
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_touch_client_TouchScroller_handlerRegs, com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(widget, new com_google_gwt_touch_client_TouchScroller$2_TouchScroller$2__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static), (com_google_gwt_event_dom_client_TouchStartEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchStartEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchStartEvent_TYPE)));
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_touch_client_TouchScroller_handlerRegs, com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(widget, new com_google_gwt_touch_client_TouchScroller$3_TouchScroller$3__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static), (com_google_gwt_event_dom_client_TouchMoveEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchMoveEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchMoveEvent_TYPE)));
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_touch_client_TouchScroller_handlerRegs, com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(widget, new com_google_gwt_touch_client_TouchScroller$4_TouchScroller$4__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static), (com_google_gwt_event_dom_client_TouchEndEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchEndEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchEndEvent_TYPE)));
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_touch_client_TouchScroller_handlerRegs, com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(widget, new com_google_gwt_touch_client_TouchScroller$5_TouchScroller$5__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static), (com_google_gwt_event_dom_client_TouchCancelEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchCancelEvent_$clinit__V() , com_google_gwt_event_dom_client_TouchCancelEvent_TYPE)));
}

function com_google_gwt_touch_client_TouchScroller_$setWidgetScrollPosition__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2V(this$static, position){
  com_google_gwt_user_client_ui_ScrollPanel_$setHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2IV(this$static.com_google_gwt_touch_client_TouchScroller_widget, com_google_gwt_lang_Cast_round_1int__DI(position.com_google_gwt_touch_client_Point_x));
  com_google_gwt_user_client_ui_ScrollPanel_$setVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2IV(this$static.com_google_gwt_touch_client_TouchScroller_widget, com_google_gwt_lang_Cast_round_1int__DI(position.com_google_gwt_touch_client_Point_y));
}

function com_google_gwt_touch_client_TouchScroller_$setupBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static){
  com_google_gwt_touch_client_TouchScroller_$removeBustClickHandler__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static);
  this$static.com_google_gwt_touch_client_TouchScroller_bustClickHandlerReg = com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V(this$static));
}

function com_google_gwt_touch_client_TouchScroller_TouchScroller__V(){
  this.com_google_gwt_touch_client_TouchScroller_handlerRegs = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_touch_client_TouchScroller_lastTouchPosition = new com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__V;
  this.com_google_gwt_touch_client_TouchScroller_recentTouchPosition = new com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__V;
  this.com_google_gwt_touch_client_TouchScroller_recentScrollTriggeringTouchPosition = new com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__V;
  this.com_google_gwt_touch_client_TouchScroller_touchPositionsDuringMomentum = new java_util_ArrayList_ArrayList__V;
  this.com_google_gwt_touch_client_TouchScroller_momentumTouchRemovalCommand = new com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_TouchScroller$MomentumTouchRemovalCommand__Lcom_google_gwt_touch_client_TouchScroller_2V(this);
  com_google_gwt_touch_client_TouchScroller_$setMomentum__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Momentum_2V(this, new com_google_gwt_touch_client_DefaultMomentum_DefaultMomentum__V);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(198, 1, {}, com_google_gwt_touch_client_TouchScroller_TouchScroller__V);
_.com_google_gwt_touch_client_TouchScroller_dragging = false;
_.com_google_gwt_touch_client_TouchScroller_touching = false;
var com_google_gwt_touch_client_TouchScroller_isSupported;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller', 198);
function com_google_gwt_touch_client_TouchScroller$1_TouchScroller$1__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(202, 1, {261:1, 50:1}, com_google_gwt_touch_client_TouchScroller$1_TouchScroller$1__Lcom_google_gwt_touch_client_TouchScroller_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/1', 202);
function com_google_gwt_touch_client_TouchScroller$2_TouchScroller$2__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$2_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(203, 1, {262:1, 50:1}, com_google_gwt_touch_client_TouchScroller$2_TouchScroller$2__Lcom_google_gwt_touch_client_TouchScroller_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/2', 203);
function com_google_gwt_touch_client_TouchScroller$3_TouchScroller$3__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$3_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(204, 1, {263:1, 50:1}, com_google_gwt_touch_client_TouchScroller$3_TouchScroller$3__Lcom_google_gwt_touch_client_TouchScroller_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/3', 204);
function com_google_gwt_touch_client_TouchScroller$4_TouchScroller$4__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$4_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(205, 1, {264:1, 50:1}, com_google_gwt_touch_client_TouchScroller$4_TouchScroller$4__Lcom_google_gwt_touch_client_TouchScroller_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$4_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/4', 205);
function com_google_gwt_touch_client_TouchScroller$5_TouchScroller$5__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$5_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(206, 1, {265:1, 50:1}, com_google_gwt_touch_client_TouchScroller$5_TouchScroller$5__Lcom_google_gwt_touch_client_TouchScroller_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/5', 206);
function com_google_gwt_touch_client_TouchScroller$6_$onPreviewNativeEvent__Lcom_google_gwt_touch_client_TouchScroller$6_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static, event_0){
  var clickPoint;
  if (1 == com_google_gwt_user_client_Event_$getTypeInt__Lcom_google_gwt_user_client_Event_2I(event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent)) {
    clickPoint = new com_google_gwt_touch_client_Point_Point__DDV((event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.clientX || 0) | 0, (event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent.clientY || 0) | 0);
    if (com_google_gwt_touch_client_TouchScroller_$isClickScrollTriggeringTouch__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this$static.com_google_gwt_touch_client_TouchScroller$6_this$01, clickPoint) || com_google_gwt_touch_client_TouchScroller_$isClickTouchPositionDuringMomentum__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2Z(this$static.com_google_gwt_touch_client_TouchScroller$6_this$01, clickPoint)) {
      event_0.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = true;
      com_google_gwt_dom_client_DOMImpl_$eventStopPropagation__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_NativeEvent_2V(event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent);
      com_google_gwt_dom_client_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2V(event_0.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent);
    }
  }
}

function com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$6_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(106, 1, {50:1, 259:1}, com_google_gwt_touch_client_TouchScroller$6_TouchScroller$6__Lcom_google_gwt_touch_client_TouchScroller_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$6_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/6', 106);
function com_google_gwt_touch_client_TouchScroller$MomentumCommand_$finish__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(this$static){
  if (this$static.com_google_gwt_touch_client_TouchScroller$MomentumCommand_windowResizeHandler) {
    com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static.com_google_gwt_touch_client_TouchScroller$MomentumCommand_windowResizeHandler.com_google_gwt_event_shared_LegacyHandlerWrapper_real);
    this$static.com_google_gwt_touch_client_TouchScroller$MomentumCommand_windowResizeHandler = null;
  }
  this$static == this$static.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01.com_google_gwt_touch_client_TouchScroller_momentumCommand && (this$static.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01.com_google_gwt_touch_client_TouchScroller_momentumCommand = null);
}

function com_google_gwt_touch_client_TouchScroller$MomentumCommand_TouchScroller$MomentumCommand__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2V(this$0, endVelocity){
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01 = this$0;
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_duration = new com_google_gwt_core_client_Duration_Duration__V;
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_initialPosition = com_google_gwt_touch_client_TouchScroller_$getWidgetScrollPosition__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01);
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state = new com_google_gwt_touch_client_Momentum$State_Momentum$State__Lcom_google_gwt_touch_client_Point_2Lcom_google_gwt_touch_client_Point_2V(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_initialPosition, endVelocity);
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_windowResizeHandler = com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_touch_client_TouchScroller$MomentumCommand$1_TouchScroller$MomentumCommand$1__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(this));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(199, 1, {}, com_google_gwt_touch_client_TouchScroller$MomentumCommand_TouchScroller$MomentumCommand__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2V);
_.execute__Z = function com_google_gwt_touch_client_TouchScroller$MomentumCommand_execute__Z(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01.com_google_gwt_touch_client_TouchScroller_momentumCommand) {
    com_google_gwt_touch_client_TouchScroller$MomentumCommand_$finish__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(this);
    return false;
  }
  cumulativeElapsedMillis = com_google_gwt_core_client_Duration_$elapsedMillis__Lcom_google_gwt_core_client_Duration_2I(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_duration);
  com_google_gwt_touch_client_Momentum$State_$setElapsedMillis__Lcom_google_gwt_touch_client_Momentum$State_2IV(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state, cumulativeElapsedMillis - this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_lastElapsedMillis);
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_lastElapsedMillis = cumulativeElapsedMillis;
  com_google_gwt_touch_client_Momentum$State_$setCumulativeElapsedMillis__Lcom_google_gwt_touch_client_Momentum$State_2IV(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state, cumulativeElapsedMillis);
  notDone = com_google_gwt_touch_client_DefaultMomentum_$updateState__Lcom_google_gwt_touch_client_DefaultMomentum_2Lcom_google_gwt_touch_client_Momentum$State_2Z(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state);
  notDone || com_google_gwt_touch_client_TouchScroller$MomentumCommand_$finish__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(this);
  com_google_gwt_touch_client_TouchScroller_$setWidgetScrollPosition__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_touch_client_Point_2V(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01, this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state.com_google_gwt_touch_client_Momentum$State_position);
  hPos = com_google_gwt_lang_Cast_round_1int__DI(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state.com_google_gwt_touch_client_Momentum$State_position.com_google_gwt_touch_client_Point_x);
  hMin = com_google_gwt_user_client_ui_ScrollPanel_$getMinimumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01.com_google_gwt_touch_client_TouchScroller_widget);
  hMax = com_google_gwt_user_client_ui_ScrollPanel_$getMaximumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01.com_google_gwt_touch_client_TouchScroller_widget);
  vMax = com_google_gwt_user_client_ui_ScrollPanel_$getMaximumVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_this$01.com_google_gwt_touch_client_TouchScroller_widget);
  vPos = com_google_gwt_lang_Cast_round_1int__DI(this.com_google_gwt_touch_client_TouchScroller$MomentumCommand_state.com_google_gwt_touch_client_Momentum$State_position.com_google_gwt_touch_client_Point_y);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    com_google_gwt_touch_client_TouchScroller$MomentumCommand_$finish__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(this);
    return false;
  }
  return notDone;
}
;
_.com_google_gwt_touch_client_TouchScroller$MomentumCommand_lastElapsedMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$MomentumCommand_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/MomentumCommand', 199);
function com_google_gwt_touch_client_TouchScroller$MomentumCommand$1_TouchScroller$MomentumCommand$1__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V(this$1){
  this.com_google_gwt_touch_client_TouchScroller$MomentumCommand$1_this$11 = this$1;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(201, 1, {258:1, 50:1}, com_google_gwt_touch_client_TouchScroller$MomentumCommand$1_TouchScroller$MomentumCommand$1__Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$MomentumCommand$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/MomentumCommand/1', 201);
function com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_TouchScroller$MomentumTouchRemovalCommand__Lcom_google_gwt_touch_client_TouchScroller_2V(this$0){
  this.com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(200, 1, {}, com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_TouchScroller$MomentumTouchRemovalCommand__Lcom_google_gwt_touch_client_TouchScroller_2V);
_.execute__Z = function com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_execute__Z(){
  var currentTime, iter, point;
  currentTime = com_google_gwt_core_client_JsDate_now__D();
  iter = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this.com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_this$01.com_google_gwt_touch_client_TouchScroller_touchPositionsDuringMomentum);
  while (iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$01.size__I()) {
    point = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(iter.java_util_AbstractList$IteratorImpl_i < iter.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iter.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(iter.java_util_AbstractList$IteratorImpl_last = iter.java_util_AbstractList$IteratorImpl_i++), 47));
    currentTime - point.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time >= 2500 && (com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(iter.java_util_AbstractList$IteratorImpl_last != -1) , iter.java_util_AbstractList$IteratorImpl_this$01.remove__ILjava_lang_Object_2(iter.java_util_AbstractList$IteratorImpl_last) , iter.java_util_AbstractList$IteratorImpl_i = iter.java_util_AbstractList$IteratorImpl_last , iter.java_util_AbstractList$IteratorImpl_last = -1);
  }
  return this.com_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_this$01.com_google_gwt_touch_client_TouchScroller_touchPositionsDuringMomentum.java_util_ArrayList_array.length != 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$MomentumTouchRemovalCommand_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/MomentumTouchRemovalCommand', 200);
function com_google_gwt_touch_client_TouchScroller$TemporalPoint_$setTemporalPoint__Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2Lcom_google_gwt_touch_client_Point_2DV(this$static, point, time){
  this$static.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point = point;
  this$static.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time = time;
}

function com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__V(){
}

function com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__Lcom_google_gwt_touch_client_Point_2DV(point, time){
  this.com_google_gwt_touch_client_TouchScroller$TemporalPoint_point = point;
  this.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time = time;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(47, 1, {47:1}, com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__V, com_google_gwt_touch_client_TouchScroller$TemporalPoint_TouchScroller$TemporalPoint__Lcom_google_gwt_touch_client_Point_2DV);
_.com_google_gwt_touch_client_TouchScroller$TemporalPoint_time = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1touch_1client_1TouchScroller$TemporalPoint_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_39, 'TouchScroller/TemporalPoint', 47);
function com_google_gwt_user_client_DOM_$clinit__V(){
  com_google_gwt_user_client_DOM_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V();
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__V();
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
  var ret;
  ret = com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(com_google_gwt_user_client_Event_handlers, evt);
  if (!ret && !!evt) {
    com_google_gwt_dom_client_DOMImpl_$eventStopPropagation__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_NativeEvent_2V(evt);
    com_google_gwt_dom_client_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2V(evt);
  }
  return ret;
}

function com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(maybePotential){
  com_google_gwt_user_client_DOM_$clinit__V();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem;
function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_12, 2, 4, [$intern_11]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_11, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_user_client_Event_$getTypeInt__Lcom_google_gwt_user_client_Event_2I(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(this$static.type);
}

function com_google_gwt_user_client_Event_addNativePreviewHandler__Lcom_google_gwt_user_client_Event$NativePreviewHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  !com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && (com_google_gwt_user_client_Event$NativePreviewEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
  if (!com_google_gwt_user_client_Event_handlers) {
    com_google_gwt_user_client_Event_handlers = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2ZV(null, true);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton = new com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V;
  }
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_user_client_Event_handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, handler);
}

function com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(typeName){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , typeName));
}

function com_google_gwt_user_client_Event_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener);
}

function com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(elem){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, 32768);
}

var com_google_gwt_user_client_Event_handlers;
function com_google_gwt_user_client_Event$NativePreviewEvent_$dispatch__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_user_client_Event$NativePreviewHandler_2V(this$static, handler){
  com_google_gwt_touch_client_TouchScroller$6_$onPreviewNativeEvent__Lcom_google_gwt_touch_client_TouchScroller$6_2Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(handler, this$static);
  com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this$static){
  this$static.com_google_gwt_event_shared_GwtEvent_dead = false;
  this$static.com_google_web_bindery_event_shared_Event_source = null;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = true;
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = null;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V(){
}

function com_google_gwt_user_client_Event$NativePreviewEvent_fire__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_dom_client_NativeEvent_2Z(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!com_google_gwt_user_client_Event$NativePreviewEvent_TYPE && !!handlers && com_google_gwt_event_shared_HandlerManager_$isEventHandled__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Z(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_TYPE)) {
    lastIsCanceled = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled;
    lastIsConsumed = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed;
    lastIsFirstHandler = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler;
    lastNativeEvent = com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent;
    com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    com_google_gwt_user_client_Event$NativePreviewEvent_$setNativeEvent__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(com_google_gwt_user_client_Event$NativePreviewEvent_singleton, nativeEvent);
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlers, com_google_gwt_user_client_Event$NativePreviewEvent_singleton);
    ret = !(com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled && !com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed);
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = lastIsCanceled;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = lastIsConsumed;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = lastIsFirstHandler;
    com_google_gwt_user_client_Event$NativePreviewEvent_singleton.com_google_gwt_user_client_Event$NativePreviewEvent_nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(175, 245, {}, com_google_gwt_user_client_Event$NativePreviewEvent_Event$NativePreviewEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Event$NativePreviewEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_user_client_Event$NativePreviewEvent_$dispatch__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2Lcom_google_gwt_user_client_Event$NativePreviewHandler_2V(this, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 259));
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Event$NativePreviewEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Event$NativePreviewEvent_TYPE;
}
;
_.revive__V = function com_google_gwt_user_client_Event$NativePreviewEvent_revive__V(){
  com_google_gwt_user_client_Event$NativePreviewEvent_$revive__Lcom_google_gwt_user_client_Event$NativePreviewEvent_2V(this);
}
;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isCanceled = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isConsumed = false;
_.com_google_gwt_user_client_Event$NativePreviewEvent_isFirstHandler = false;
var com_google_gwt_user_client_Event$NativePreviewEvent_TYPE, com_google_gwt_user_client_Event$NativePreviewEvent_singleton;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Event$NativePreviewEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'Event/NativePreviewEvent', 175);
function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type_0, handler);
}

function com_google_gwt_user_client_Window_addResizeHandler__Lcom_google_gwt_event_logical_shared_ResizeHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_event_logical_shared_ResizeEvent_TYPE && (com_google_gwt_event_logical_shared_ResizeEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V) , com_google_gwt_event_logical_shared_ResizeEvent_TYPE), handler);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_maybeInitializeResizeHandlers__V(){
  if (!com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
    com_google_gwt_user_client_Window_resizeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosed__V(){
  com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event_0;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event_0 = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event_0);
    return null;
  }
  return null;
}

function com_google_gwt_user_client_Window_onResize__V(){
  var height, width_0;
  if (com_google_gwt_user_client_Window_resizeHandlersInitialized) {
    width_0 = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
    height = com_google_gwt_dom_client_Document_$getClientHeight__Lcom_google_gwt_dom_client_Document_2I($doc);
    if (com_google_gwt_user_client_Window_lastResizeWidth != width_0 || com_google_gwt_user_client_Window_lastResizeHeight != height) {
      com_google_gwt_user_client_Window_lastResizeWidth = width_0;
      com_google_gwt_user_client_Window_lastResizeHeight = height;
      com_google_gwt_event_logical_shared_ResizeEvent_fire__Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2IIV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
  }
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers, com_google_gwt_user_client_Window_lastResizeHeight = 0, com_google_gwt_user_client_Window_lastResizeWidth = 0, com_google_gwt_user_client_Window_resizeHandlersInitialized = false;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(152, 245, {}, com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_throwClassCastExceptionUnlessNull__Ljava_lang_Object_2Ljava_lang_Object_2(handler);
  null.nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'Window/ClosingEvent', 152);
function com_google_gwt_user_client_Window$Location_buildListParamMap__Ljava_lang_String_2Ljava_util_Map_2(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, com_google_gwt_http_client_URL_decodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0;
  out = new java_util_HashMap_HashMap__V;
  if (queryString != null && queryString.length > 1) {
    qs = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(queryString, 1, queryString.length - 1);
    for (kvPair$array = java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(kvPair, '=', 2);
      key = kv[0];
      if (!key.length) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(val) , com_google_gwt_http_client_URL_decodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0 = /\+/g , decodeURIComponent(val.replace(com_google_gwt_http_client_URL_decodeQueryStringImpl__Ljava_lang_String_2Ljava_lang_String_2_regexp_0, '%20')));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 37))
          throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
      values = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(out.get__Ljava_lang_Object_2Ljava_lang_Object_2(key), 6);
      if (!values) {
        values = new java_util_ArrayList_ArrayList__V;
        out.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, values);
      }
      values.add__Ljava_lang_Object_2Z(val);
    }
  }
  for (entry$iterator = out.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 5);
    entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_Collections_unmodifiableList__Ljava_util_List_2Ljava_util_List_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry.getValue__Ljava_lang_Object_2(), 6)));
  }
  out = (java_util_Collections_$clinit__V() , new java_util_Collections$UnmodifiableMap_Collections$UnmodifiableMap__Ljava_util_Map_2V(out));
  return out;
}

function com_google_gwt_user_client_Window$Location_ensureListParameterMap__V(){
  var currentQueryString, com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0, com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0, com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_questionLoc_0;
  currentQueryString = (com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0 = $wnd.location.href , com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0 = com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.indexOf('#') , com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0 >= 0 && (com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0 = com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.substring(0, com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_hashLoc_0)) , com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_questionLoc_0 = com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.indexOf('?') , com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_questionLoc_0 > 0?com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_href_0.substring(com_google_gwt_user_client_impl_WindowImplIE_$getQueryString__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2_questionLoc_0):'');
  if (!com_google_gwt_user_client_Window$Location_listParamMap || !java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(com_google_gwt_user_client_Window$Location_cachedQueryString, currentQueryString)) {
    com_google_gwt_user_client_Window$Location_listParamMap = com_google_gwt_user_client_Window$Location_buildListParamMap__Ljava_lang_String_2Ljava_util_Map_2(currentQueryString);
    com_google_gwt_user_client_Window$Location_cachedQueryString = currentQueryString;
  }
}

var com_google_gwt_user_client_Window$Location_cachedQueryString = '', com_google_gwt_user_client_Window$Location_listParamMap;
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(76, 63, {22:1}, com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_40, 'Window/WindowHandlers', 76);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
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
    case $intern_41:
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
      return $intern_42;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_29;
    case $intern_21:
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_30;
    case $intern_20:
      return 8388608;
    case 'gesturestart':
      return $intern_43;
    case 'gesturechange':
      return $intern_44;
    case 'gestureend':
      return $intern_45;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem){
  var maybeListener = elem.__listener;
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(maybeListener) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(maybeListener, 24)?maybeListener:null;
}

function com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V(){
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers = {_default_:com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V, dragenter:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V, dragover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V};
  com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers = {click:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, dblclick:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousedown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousemove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseout:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousewheel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, keydown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keyup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keypress:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, touchstart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchmove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchcancel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturestart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gestureend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturechange:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V};
}

function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V);
  var foreach = com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
  var bitlessEvents = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents = com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers;
  foreach(captureEvents, function(e, fn){
    captureEvents[e] = $entry(fn);
  }
  );
  foreach(captureEvents, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('dragover', eventTypeName) && com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, 'dragenter');
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  var dispatchMap = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  var dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2 && (elem.ondblclick = bits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null);
  chMask & $intern_42 && (elem.onerror = bits & $intern_42?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_29 && (elem.onpaste = bits & $intern_29?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_30 && (elem.ontouchend = bits & $intern_30?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_43 && (elem.ongesturestart = bits & $intern_43?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_44 && (elem.ongesturechange = bits & $intern_44?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_45 && (elem.ongestureend = bits & $intern_45?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  !com_google_gwt_user_client_DOM_previewEvent__Lcom_google_gwt_user_client_Event_2Z(evt);
  return;
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_dom_client_DOMImplStandard_$eventPreventDefault__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_NativeEvent_2V(evt);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt);
  if (!element) {
    return;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, element.nodeType != 1?null:element, com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(element));
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt);
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(element, $intern_46, evt.type);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt){
  var curElem;
  curElem = com_google_gwt_dom_client_DOMImplStandardBase_$eventGetCurrentTarget__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt);
  while (!!curElem && !com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent;
function com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function com_google_gwt_user_client_impl_WindowImplIE_$initHandler__Lcom_google_gwt_user_client_impl_WindowImplIE_2Ljava_lang_String_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(initFunc, cmd){
  var scriptElem;
  scriptElem = com_google_gwt_dom_client_DOMImplStandardBase_$createScriptElement__Lcom_google_gwt_dom_client_DOMImplStandardBase_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ScriptElement_2($doc, initFunc);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, scriptElem);
  cmd.execute__V();
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2($doc.body, scriptElem);
}

function com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(171, 1, {}, com_google_gwt_user_client_impl_WindowImplIE$1_WindowImplIE$1__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
_.execute__V = function com_google_gwt_user_client_impl_WindowImplIE$1_execute__V(){
  $wnd.__gwt_initWindowCloseHandler($entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2), $entry(com_google_gwt_user_client_Window_onClosed__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1WindowImplIE$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'WindowImplIE/1', 171);
function com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(172, 1, {}, com_google_gwt_user_client_impl_WindowImplIE$2_WindowImplIE$2__Lcom_google_gwt_user_client_impl_WindowImplIE_2V);
_.execute__V = function com_google_gwt_user_client_impl_WindowImplIE$2_execute__V(){
  $wnd.__gwt_initWindowResizeHandler($entry(com_google_gwt_user_client_Window_onResize__V));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1WindowImplIE$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_47, 'WindowImplIE/2', 172);
function com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static){
  return com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$setHeight__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).style[$intern_48] = $intern_49;
}

function com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).style[$intern_50] = $intern_49;
  this$static.com_google_gwt_user_client_ui_UIObject_element.style[$intern_48] = $intern_49;
}

function com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static, style){
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), style);
}

function com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, eventTypeName){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEvent__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, eventTypeName);
}

function com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(elem, style){
  if (!elem) {
    throw new java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(style);
  if (style.length == 0) {
    throw new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Style names cannot be empty');
  }
  com_google_gwt_dom_client_Element_$addClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Z(elem, style);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(19, 1, {23:1, 19:1});
_.toString__Ljava_lang_String_2$ = function com_google_gwt_user_client_ui_UIObject_toString__Ljava_lang_String_2(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return '(null handle)';
  }
  return (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).outerHTML;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'UIObject', 19);
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  var typeInt;
  typeInt = com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(type_0.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, type_0.com_google_gwt_event_dom_client_DomEvent$Type_name):this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?(com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, typeInt | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0))):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$addHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && (this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_impl_DOMImplStandard_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, bitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= bitsToAdd));
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
  com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(this$static, true);
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event_0){
  var related;
  switch (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && com_google_gwt_dom_client_DOMImplTrident_isOrHasChildImpl__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event_0, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_attached) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    com_google_gwt_event_logical_shared_AttachEvent_fire__Lcom_google_gwt_event_logical_shared_HasAttachHandlers_2ZV(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      com_google_gwt_user_client_DOM_$clinit__V();
      com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, null);
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    this$static.com_google_gwt_user_client_ui_Widget_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets");
  }
}

function com_google_gwt_user_client_ui_Widget_$replaceElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_Widget_attached && (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, null));
  !!this$static.com_google_gwt_user_client_ui_UIObject_element && com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, elem);
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  this$static.com_google_gwt_user_client_ui_Widget_attached && (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static));
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent_0){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.com_google_gwt_user_client_ui_Widget_attached && this$static.onDetach__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent');
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent_0;
    parent_0.com_google_gwt_user_client_ui_Widget_attached && this$static.onAttach__V();
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(15, 19, $intern_52);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Widget_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Widget', 15);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(247, 15, $intern_52);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Panel', 247);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem)), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(96, 247, $intern_52);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'ComplexPanel', 96);
function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, 'left', '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, 'top', '');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(elem.style, $intern_53, '');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(161, 96, $intern_52);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'AbsolutePanel', 161);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 15);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(caught, e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  if (caught) {
    throw new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(165, 97, $intern_23, com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'AttachDetachException', 165);
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(166, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'AttachDetachException/1', 166);
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(167, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'AttachDetachException/2', 167);
function com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(td, align_0){
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , td), 'align', align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V((com_google_gwt_user_client_DOM_$clinit__V() , td), align_0);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(td.style, 'verticalAlign', align_0.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString);
}

function com_google_gwt_user_client_ui_CellPanel_CellPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_CellPanel_table = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('table'));
  this.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement('tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_CellPanel_body));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_CellPanel_table);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(98, 96, $intern_52);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'CellPanel', 98);
function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static, content){
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, content);
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(174, 1, {}, com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DirectionalTextHelper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'DirectionalTextHelper', 174);
function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V((com_google_gwt_dom_client_Style$TextAlign_$clinit__V() , 'center'));
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('justify');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('left');
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('right');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(248, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$AutoHorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 248);
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(69, 248, {}, com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'HasHorizontalAlignment/HorizontalAlignmentConstant', 69);
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('bottom');
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('middle');
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('top');
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(77, 1, {}, com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'HasVerticalAlignment/VerticalAlignmentConstant', 77);
function com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  td = (com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('td')) , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign) , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign) , com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('tr'));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow));
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_CellPanel_table, $intern_54, '0');
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_CellPanel_table, $intern_55, '0');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(102, 98, $intern_52, com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_HorizontalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, td);
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HorizontalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'HorizontalPanel', 102);
function com_google_gwt_user_client_ui_Image_$clinit__V(){
  com_google_gwt_user_client_ui_Image_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  new java_util_HashMap_HashMap__V;
}

function com_google_gwt_user_client_ui_Image_$changeState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_user_client_ui_Image$State_2V(this$static, newState){
  this$static.com_google_gwt_user_client_ui_Image_state = newState;
}

function com_google_gwt_user_client_ui_Image_Image__Lcom_google_gwt_safehtml_shared_SafeUri_2V(url_0){
  com_google_gwt_user_client_ui_Image_$changeState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_user_client_ui_Image$State_2V(this, new com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V(this, url_0));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-Image');
}

function com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V(){
  com_google_gwt_user_client_ui_Image_$clinit__V();
  com_google_gwt_user_client_ui_Image_Image__Lcom_google_gwt_safehtml_shared_SafeUri_2V.call(this, (com_google_gwt_safehtml_shared_UriUtils_$clinit__V() , new com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(33, 15, $intern_52, com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Image_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type) == 32768 && !!this.com_google_gwt_user_client_ui_Image_state && com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_UIObject_element, $intern_46, '');
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Image_onLoad__V(){
  com_google_gwt_user_client_ui_Image$State_$onLoad__Lcom_google_gwt_user_client_ui_Image$State_2Lcom_google_gwt_user_client_ui_Image_2V(this.com_google_gwt_user_client_ui_Image_state, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Image', 33);
function com_google_gwt_user_client_ui_Image$State_$onLoad__Lcom_google_gwt_user_client_ui_Image$State_2Lcom_google_gwt_user_client_ui_Image_2V(this$static, image){
  var unhandledEvent;
  unhandledEvent = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2((com_google_gwt_user_client_DOM_$clinit__V() , image.com_google_gwt_user_client_ui_UIObject_element), $intern_46);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_41, unhandledEvent) && (this$static.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = new com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V(this$static, image) , com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), this$static.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(179, 1, {});
_.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$State_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Image/State', 179);
function com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V(this$1, val$image){
  this.com_google_gwt_user_client_ui_Image$State$1_this$11 = this$1;
  this.com_google_gwt_user_client_ui_Image$State$1_val$image2 = val$image;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(180, 1, {}, com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V);
_.execute__V = function com_google_gwt_user_client_ui_Image$State$1_execute__V(){
  var evt, com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0;
  if (this.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_Image_state != this.com_google_gwt_user_client_ui_Image$State$1_this$11 || this != this.com_google_gwt_user_client_ui_Image$State$1_this$11.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand) {
    return;
  }
  this.com_google_gwt_user_client_ui_Image$State$1_this$11.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = null;
  if (!this.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_Widget_attached) {
    com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(com_google_gwt_user_client_ui_Image$UnclippedState_$getImageElement__Lcom_google_gwt_user_client_ui_Image$UnclippedState_2Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_dom_client_ImageElement_2(this.com_google_gwt_user_client_ui_Image$State$1_val$image2), $intern_46, $intern_41);
    return;
  }
  evt = (com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0 = $doc.createEvent('HTMLEvents') , com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0.initEvent($intern_41, false, false) , com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0);
  com_google_gwt_dom_client_DOMImplStandard_$dispatchEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_NativeEvent_2V(com_google_gwt_user_client_ui_Image$UnclippedState_$getImageElement__Lcom_google_gwt_user_client_ui_Image$UnclippedState_2Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_dom_client_ImageElement_2(this.com_google_gwt_user_client_ui_Image$State$1_val$image2), evt);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$State$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Image/State/1', 180);
function com_google_gwt_user_client_ui_Image$UnclippedState_$getImageElement__Lcom_google_gwt_user_client_ui_Image$UnclippedState_2Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_dom_client_ImageElement_2(image){
  return com_google_gwt_user_client_DOM_$clinit__V() , image.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V(image, url_0){
  com_google_gwt_user_client_ui_Widget_$replaceElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2V(image, $doc.createElement('img'));
  com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV((com_google_gwt_user_client_DOM_$clinit__V() , image.com_google_gwt_user_client_ui_UIObject_element));
  image.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_DOM_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(image.com_google_gwt_user_client_ui_UIObject_element, 133398655 | (image.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(image.com_google_gwt_user_client_ui_Widget_eventsToSink |= 133398655);
  !!image.com_google_gwt_user_client_ui_Image_state && com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(image.com_google_gwt_user_client_ui_UIObject_element, $intern_46, '');
  com_google_gwt_dom_client_ImageElement_$setSrc__Lcom_google_gwt_dom_client_ImageElement_2Ljava_lang_String_2V(image.com_google_gwt_user_client_ui_UIObject_element, url_0.com_google_gwt_safehtml_shared_SafeUriString_uri);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(103, 179, {}, com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$UnclippedState_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Image/UnclippedState', 103);
function com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV(element){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , element));
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(99, 15, $intern_52);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LabelBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'LabelBase', 99);
function com_google_gwt_user_client_ui_Label_Label__V(){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, $doc.createElement('div'));
  com_google_gwt_dom_client_Element_$setClassName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), 'gwt-Label');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(78, 99, $intern_52, com_google_gwt_user_client_ui_Label_Label__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'Label', 78);
function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    widget.onDetach__V();
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(id_0){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var elem, rp;
  rp = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id_0), 64);
  elem = null;
  if (id_0 != null) {
    if (!(elem = com_google_gwt_dom_client_Document_$getElementById__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_Element_2($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || (com_google_gwt_user_client_DOM_$clinit__V() , rp.com_google_gwt_user_client_ui_UIObject_element == elem)) {
      return rp;
    }
  }
  com_google_gwt_user_client_ui_RootPanel_rootPanels.java_util_AbstractHashMap_size == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  !elem?(rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V):(rp = new com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem));
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, id_0, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(64, 161, $intern_56, com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'RootPanel', 64);
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(163, 1, {}, com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.com_google_gwt_user_client_ui_Widget_attached && w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'RootPanel/1', 163);
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(164, 1, {257:1, 50:1}, com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'RootPanel/2', 164);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.body);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(162, 64, $intern_56, com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'RootPanel/DefaultRootPanel', 162);
function com_google_gwt_user_client_ui_ScrollImpl_$getMaximumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2I(scrollable){
  return com_google_gwt_user_client_ui_ScrollImpl_$isRtl__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2Z(scrollable)?0:(com_google_gwt_dom_client_Element_$getSubPixelScrollWidth__Lcom_google_gwt_dom_client_Element_2D(scrollable) | 0) - (scrollable.clientWidth | 0);
}

function com_google_gwt_user_client_ui_ScrollImpl_$getMinimumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2I(scrollable){
  return com_google_gwt_user_client_ui_ScrollImpl_$isRtl__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2Z(scrollable)?(scrollable.clientWidth | 0) - (com_google_gwt_dom_client_Element_$getSubPixelScrollWidth__Lcom_google_gwt_dom_client_Element_2D(scrollable) | 0):0;
}

function com_google_gwt_user_client_ui_ScrollImpl_$isRtl__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2Z(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}

function com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(83, 1, {}, com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V);
var com_google_gwt_user_client_ui_ScrollImpl_impl;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ScrollImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'ScrollImpl', 83);
function com_google_gwt_user_client_ui_SimplePanel_$add__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('SimplePanel can only contain one child widget');
  }
  com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w);
}

function com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  if (this$static.com_google_gwt_user_client_ui_SimplePanel_widget != w) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.getContainerElement__Lcom_google_gwt_user_client_Element_2(), (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
    this$static.com_google_gwt_user_client_ui_SimplePanel_widget = null;
  }
  return true;
}

function com_google_gwt_user_client_ui_SimplePanel_$setWidget__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  if (w == this$static.com_google_gwt_user_client_ui_SimplePanel_widget) {
    return;
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(w);
  !!this$static.com_google_gwt_user_client_ui_SimplePanel_widget && com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, this$static.com_google_gwt_user_client_ui_SimplePanel_widget);
  this$static.com_google_gwt_user_client_ui_SimplePanel_widget = w;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_ScrollPanel_containerElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_UIObject_$getElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_SimplePanel_widget)));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, this$static);
}

function com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(101, 247, $intern_52);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_SimplePanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element;
}
;
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_SimplePanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_SimplePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'SimplePanel', 101);
function com_google_gwt_user_client_ui_ScrollPanel_$getHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static){
  return com_google_gwt_dom_client_DOMImplIE9_$getScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2I((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem));
}

function com_google_gwt_user_client_ui_ScrollPanel_$getMaximumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static){
  return com_google_gwt_user_client_ui_ScrollImpl_$getMaximumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2I((!com_google_gwt_user_client_ui_ScrollImpl_impl && (com_google_gwt_user_client_ui_ScrollImpl_impl = new com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V) , com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem));
}

function com_google_gwt_user_client_ui_ScrollPanel_$getMaximumVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static){
  return (((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem).scrollHeight || 0) | 0) - (this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem.clientHeight | 0);
}

function com_google_gwt_user_client_ui_ScrollPanel_$getMinimumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static){
  return com_google_gwt_user_client_ui_ScrollImpl_$getMinimumHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollImpl_2Lcom_google_gwt_dom_client_Element_2I((!com_google_gwt_user_client_ui_ScrollImpl_impl && (com_google_gwt_user_client_ui_ScrollImpl_impl = new com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V) , com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem));
}

function com_google_gwt_user_client_ui_ScrollPanel_$getVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2I(this$static){
  return ((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem).scrollTop || 0) | 0;
}

function com_google_gwt_user_client_ui_ScrollPanel_$setHorizontalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2IV(this$static, position){
  com_google_gwt_dom_client_DOMImplIE9_$setScrollLeft__Lcom_google_gwt_dom_client_DOMImplIE9_2Lcom_google_gwt_dom_client_Element_2IV((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem), position);
}

function com_google_gwt_user_client_ui_ScrollPanel_$setTouchScrollingDisabled__Lcom_google_gwt_user_client_ui_ScrollPanel_2ZZ(this$static){
  var com_google_gwt_touch_client_TouchScroller_createIfSupported__Lcom_google_gwt_user_client_ui_HasScrolling_2Lcom_google_gwt_touch_client_TouchScroller_2_scroller_0;
  if (this$static.com_google_gwt_user_client_ui_ScrollPanel_touchScroller) {
    return false;
  }
  this$static.com_google_gwt_user_client_ui_ScrollPanel_touchScroller = (com_google_gwt_touch_client_TouchScroller_createIfSupported__Lcom_google_gwt_user_client_ui_HasScrolling_2Lcom_google_gwt_touch_client_TouchScroller_2_scroller_0 = (!com_google_gwt_touch_client_TouchScroller_isSupported && (com_google_gwt_touch_client_TouchScroller_isSupported = (java_lang_Boolean_$clinit__V() , !com_google_gwt_event_dom_client_TouchEvent_impl && (com_google_gwt_event_dom_client_TouchEvent_impl = new com_google_gwt_event_dom_client_TouchEvent$TouchSupportDetectorNo_TouchEvent$TouchSupportDetectorNo__V) , java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE)) , com_google_gwt_touch_client_TouchScroller_isSupported.java_lang_Boolean_value?new com_google_gwt_touch_client_TouchScroller_TouchScroller__V:null) , !!com_google_gwt_touch_client_TouchScroller_createIfSupported__Lcom_google_gwt_user_client_ui_HasScrolling_2Lcom_google_gwt_touch_client_TouchScroller_2_scroller_0 && com_google_gwt_touch_client_TouchScroller_$setTargetWidget__Lcom_google_gwt_touch_client_TouchScroller_2Lcom_google_gwt_user_client_ui_HasScrolling_2V(com_google_gwt_touch_client_TouchScroller_createIfSupported__Lcom_google_gwt_user_client_ui_HasScrolling_2Lcom_google_gwt_touch_client_TouchScroller_2_scroller_0, this$static) , com_google_gwt_touch_client_TouchScroller_createIfSupported__Lcom_google_gwt_user_client_ui_HasScrolling_2Lcom_google_gwt_touch_client_TouchScroller_2_scroller_0);
  return !this$static.com_google_gwt_user_client_ui_ScrollPanel_touchScroller;
}

function com_google_gwt_user_client_ui_ScrollPanel_$setVerticalScrollPosition__Lcom_google_gwt_user_client_ui_ScrollPanel_2IV(this$static, position){
  com_google_gwt_dom_client_Element_$setScrollTop__Lcom_google_gwt_dom_client_Element_2IV((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem), position);
}

function com_google_gwt_user_client_ui_ScrollPanel_ScrollPanel__V(){
  com_google_gwt_user_client_ui_SimplePanel_SimplePanel__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('div')));
  this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem = this.com_google_gwt_user_client_ui_UIObject_element;
  this.com_google_gwt_user_client_ui_ScrollPanel_containerElem = $doc.createElement('div');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem, this.com_google_gwt_user_client_ui_ScrollPanel_containerElem);
  this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem.style['overflow'] = (com_google_gwt_dom_client_Style$Overflow_$clinit__V() , 'auto');
  this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem.style[$intern_53] = (com_google_gwt_dom_client_Style$Position_$clinit__V() , 'relative');
  this.com_google_gwt_user_client_ui_ScrollPanel_containerElem.style[$intern_53] = 'relative';
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem.style, 'zoom', '1');
  com_google_gwt_dom_client_Style_$setPropertyImpl__Lcom_google_gwt_dom_client_Style_2Ljava_lang_String_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_ScrollPanel_containerElem.style, 'zoom', '1');
  com_google_gwt_user_client_ui_ScrollPanel_$setTouchScrollingDisabled__Lcom_google_gwt_user_client_ui_ScrollPanel_2ZZ(this);
  !com_google_gwt_user_client_ui_ScrollImpl_impl && (com_google_gwt_user_client_ui_ScrollImpl_impl = new com_google_gwt_user_client_ui_ScrollImpl_ScrollImpl__V);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(177, 101, $intern_52, com_google_gwt_user_client_ui_ScrollPanel_ScrollPanel__V);
_.getContainerElement__Lcom_google_gwt_user_client_Element_2 = function com_google_gwt_user_client_ui_ScrollPanel_getContainerElement__Lcom_google_gwt_user_client_Element_2(){
  return com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_ScrollPanel_containerElem;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_ScrollPanel_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  com_google_gwt_user_client_Event_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem), this);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_ScrollPanel_onDetach__V(){
  com_google_gwt_user_client_Event_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_ScrollPanel_scrollableElem), null);
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ScrollPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'ScrollPanel', 177);
function com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (!this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement || !this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this$static.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
  return this$static.com_google_gwt_user_client_ui_SimplePanel$1_returned = this$static.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

function com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V(this$0){
  this.com_google_gwt_user_client_ui_SimplePanel$1_this$01 = this$0;
  this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = !!this.com_google_gwt_user_client_ui_SimplePanel$1_this$01.com_google_gwt_user_client_ui_SimplePanel_widget;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(178, 1, {}, com_google_gwt_user_client_ui_SimplePanel$1_SimplePanel$1__Lcom_google_gwt_user_client_ui_SimplePanel_2V);
_.hasNext__Z = function com_google_gwt_user_client_ui_SimplePanel$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_SimplePanel$1_hasElement;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_SimplePanel$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_SimplePanel$1_$next__Lcom_google_gwt_user_client_ui_SimplePanel$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.remove__V = function com_google_gwt_user_client_ui_SimplePanel$1_remove__V(){
  !!this.com_google_gwt_user_client_ui_SimplePanel$1_returned && com_google_gwt_user_client_ui_SimplePanel_$remove__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_SimplePanel$1_this$01, this.com_google_gwt_user_client_ui_SimplePanel$1_returned);
}
;
_.com_google_gwt_user_client_ui_SimplePanel$1_hasElement = false;
_.com_google_gwt_user_client_ui_SimplePanel$1_returned = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1SimplePanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'SimplePanel/1', 178);
function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, tr, com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  tr = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('tr'));
  td = (com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = $doc.createElement('td') , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign) , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tr, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(tr));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_CellPanel_table), $intern_54, '0');
  com_google_gwt_dom_client_Element_$setPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_CellPanel_table, $intern_55, '0');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(21, 98, $intern_52, com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, (null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td)));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1VerticalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'VerticalPanel', 21);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_12, 15, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i0) {
      com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(newArray, i0, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i0]);
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1]);
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, beforeIndex, w);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V;
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index_0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, i, this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1]);
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_WidgetCollection_array, this$static.com_google_gwt_user_client_ui_WidgetCollection_size, null);
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index_0;
  index_0 = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index_0 == -1) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(parent_0){
  this.com_google_gwt_user_client_ui_WidgetCollection_parent = parent_0;
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_12, 15, 4, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(181, 1, {}, com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'WidgetCollection', 181);
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw new java_util_NoSuchElementException_NoSuchElementException__V;
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(104, 1, {}, com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V);
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;
}
;
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.remove__V = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_remove__V(){
  if (!this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget) {
    throw new java_lang_IllegalStateException_IllegalStateException__V;
  }
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_parent.remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget);
  --this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = null;
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_51, 'WidgetCollection/WidgetIterator', 104);
function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplIe10_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe10_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('ie10', runtimeValue)) {
    throw new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue);
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(72, 4, $intern_4);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Error', 72);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(17, 72, $intern_4);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AssertionError', 17);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, '' + ($intern_57 + runtimeValue + ').\n' + $intern_58), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_57 + runtimeValue + ').\n' + $intern_58, 4)?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_57 + runtimeValue + ').\n' + $intern_58, 4):null);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(110, 17, $intern_4, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 110);
function com_google_gwt_useragent_client_UserAgentImplIe10_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplIe10_2Ljava_lang_String_2(){
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

function com_google_web_bindery_event_shared_SimpleEventBus$1_$removeHandler__Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2V(this$static){
  com_google_gwt_event_shared_HandlerManager$Bus_$doRemove__Lcom_google_gwt_event_shared_HandlerManager$Bus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3, this$static.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$1_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(156, 1, {}, com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'SimpleEventBus/1', 156);
function com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(157, 1, {219:1}, com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$2_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'SimpleEventBus/2', 157);
function com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$source, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3 = val$source;
  this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4 = val$handler;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(158, 1, {219:1}, com_google_web_bindery_event_shared_SimpleEventBus$3_SimpleEventBus$3__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
_.execute__V = function com_google_web_bindery_event_shared_SimpleEventBus$3_execute__V(){
  com_google_web_bindery_event_shared_SimpleEventBus_$doRemoveNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this.com_google_web_bindery_event_shared_SimpleEventBus$3_this$01, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$type2, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$source3, this.com_google_web_bindery_event_shared_SimpleEventBus$3_val$handler4);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_17, 'SimpleEventBus/3', 158);
function fdi_ucm_server_interconect_model_DocumentCompleteJSON_$setDocumento__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lfdi_ucm_server_interconect_model_DocumentsJSON_2V(this$static, documento){
  this$static.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Documento = documento;
}

function fdi_ucm_server_interconect_model_DocumentCompleteJSON_$setGramatica__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Ljava_util_ArrayList_2V(this$static, gramaticas){
  this$static.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Gramaticas = gramaticas;
}

function fdi_ucm_server_interconect_model_DocumentCompleteJSON_DocumentCompleteJSON__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(168, 1, $intern_12, fdi_ucm_server_interconect_model_DocumentCompleteJSON_DocumentCompleteJSON__V);
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1DocumentCompleteJSON_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'DocumentCompleteJSON', 168);
function fdi_ucm_server_interconect_model_DocumentsJSON_$setColeccion__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_Long_2V(this$static, coleccion){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_Coleccion = coleccion;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_$setDescription__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_String_2V(this$static, description){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_Description = description;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_$setIconPath__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_String_2V(this$static, iconPath){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_IconPath = iconPath;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_$setId__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_Long_2V(this$static, id_0){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_Id = id_0;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_$setOperationalValues__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_util_ArrayList_2V(this$static, operationalValues){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_OperationalValues = operationalValues;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_$setQRPath__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_String_2V(this$static, qRPath){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_QRPath = qRPath;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_$setUserDocument__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_util_ArrayList_2V(this$static, userDocument){
  this$static.fdi_ucm_server_interconect_model_DocumentsJSON_UserDocument = userDocument;
}

function fdi_ucm_server_interconect_model_DocumentsJSON_DocumentsJSON__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(173, 1, $intern_12, fdi_ucm_server_interconect_model_DocumentsJSON_DocumentsJSON__V);
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1DocumentsJSON_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'DocumentsJSON', 173);
function fdi_ucm_server_interconect_model_GrammarJSON_$setColeccion__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_Long_2V(this$static, coleccion){
  this$static.fdi_ucm_server_interconect_model_GrammarJSON_Coleccion = coleccion;
}

function fdi_ucm_server_interconect_model_GrammarJSON_$setDescription__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_String_2V(this$static, description){
  this$static.fdi_ucm_server_interconect_model_GrammarJSON_Description = description;
}

function fdi_ucm_server_interconect_model_GrammarJSON_$setId__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_Long_2V(this$static, id_0){
  this$static.fdi_ucm_server_interconect_model_GrammarJSON_Id = id_0;
}

function fdi_ucm_server_interconect_model_GrammarJSON_$setListaS__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_util_List_2V(this$static, listaS){
  this$static.fdi_ucm_server_interconect_model_GrammarJSON_ListaS = listaS;
}

function fdi_ucm_server_interconect_model_GrammarJSON_$setName__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_String_2V(this$static, name_0){
  this$static.fdi_ucm_server_interconect_model_GrammarJSON_Name = name_0;
}

function fdi_ucm_server_interconect_model_GrammarJSON_$setOperational__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_util_List_2V(this$static, operational){
  this$static.fdi_ucm_server_interconect_model_GrammarJSON_Operational = operational;
}

function fdi_ucm_server_interconect_model_GrammarJSON_GrammarJSON__V(){
  this.fdi_ucm_server_interconect_model_GrammarJSON_ListaS = new java_util_ArrayList_ArrayList__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(56, 1, {56:1, 3:1}, fdi_ucm_server_interconect_model_GrammarJSON_GrammarJSON__V);
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1GrammarJSON_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'GrammarJSON', 56);
function fdi_ucm_server_interconect_model_OperationalValueJSON_$setId__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Ljava_lang_Long_2V(this$static, id_0){
  this$static.fdi_ucm_server_interconect_model_OperationalValueJSON_Id = id_0;
}

function fdi_ucm_server_interconect_model_OperationalValueJSON_$setOperationalValueTypeId__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Ljava_lang_Long_2V(this$static, operationalValueTypeId){
  this$static.fdi_ucm_server_interconect_model_OperationalValueJSON_OperationalValueTypeId = operationalValueTypeId;
}

function fdi_ucm_server_interconect_model_OperationalValueJSON_$setValue__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Ljava_lang_String_2V(this$static, value_0){
  this$static.fdi_ucm_server_interconect_model_OperationalValueJSON_Value = value_0;
}

function fdi_ucm_server_interconect_model_OperationalValueJSON_OperationalValueJSON__V(){
  this.fdi_ucm_server_interconect_model_OperationalValueJSON_Value = null;
  this.fdi_ucm_server_interconect_model_OperationalValueJSON_OperationalValueTypeId = null;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(82, 1, {82:1, 3:1}, fdi_ucm_server_interconect_model_OperationalValueJSON_OperationalValueJSON__V);
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1OperationalValueJSON_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'OperationalValueJSON', 82);
function fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setDefault__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_lang_String_2V(this$static, default1){
  this$static.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default = default1;
}

function fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setId__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_util_ArrayList_2V(this$static, id_0){
  this$static.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Id = id_0;
}

function fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setName__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_lang_String_2V(this$static, name_0){
  this$static.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name = name_0;
}

function fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setView__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_lang_String_2V(this$static, view){
  this$static.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View = view;
}

function fdi_ucm_server_interconect_model_OperationalValueTypeJSON_OperationalValueTypeJSON__V(){
  this.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default = null;
  this.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name = null;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(40, 1, {40:1, 3:1}, fdi_ucm_server_interconect_model_OperationalValueTypeJSON_OperationalValueTypeJSON__V);
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1OperationalValueTypeJSON_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'OperationalValueTypeJSON', 40);
function fdi_ucm_server_interconect_model_StructureJSON_$setBrowseable__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(this$static, browseable){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Browseable = browseable;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setClaseOf__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_Long_2V(this$static, claseOf){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_ClaseOf = claseOf;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setElementId__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_Long_2V(this$static, elementId){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_ElementId = elementId;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setExtended__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(this$static, extended){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Extended = extended;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setFather__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_Long_2V(this$static, father){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Father = father;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setFiltro__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(this$static, filtro){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Filtro = filtro;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setId__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_ArrayList_2V(this$static, id_0){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Id = id_0;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setMultivalued__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(this$static, multivalued){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Multivalued = multivalued;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setName__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_String_2V(this$static, name_0){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Name = name_0;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setOperationalValues__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_ArrayList_2V(this$static, operationalValues){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_OperationalValues = operationalValues;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setSelected__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(this$static, selected){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Selected = selected;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setSelectedValue__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(this$static, selectedValue){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_SelectedValue = selectedValue;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setShows__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_ArrayList_2V(this$static, shows){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Shows = shows;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setSons__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_List_2V(this$static, sons){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Sons = sons;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setURLValue__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_String_2V(this$static, uRLValue){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_URLValue = uRLValue;
}

function fdi_ucm_server_interconect_model_StructureJSON_$setValue__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_String_2V(this$static, value_0){
  this$static.fdi_ucm_server_interconect_model_StructureJSON_Value = value_0;
}

function fdi_ucm_server_interconect_model_StructureJSON_StructureJSON__V(){
  this.fdi_ucm_server_interconect_model_StructureJSON_Sons = new java_util_ArrayList_ArrayList__V;
  this.fdi_ucm_server_interconect_model_StructureJSON_Sons = new java_util_ArrayList_ArrayList__V;
  this.fdi_ucm_server_interconect_model_StructureJSON_Id = new java_util_ArrayList_ArrayList__V;
  this.fdi_ucm_server_interconect_model_StructureJSON_Name = 'unknown';
  this.fdi_ucm_server_interconect_model_StructureJSON_Shows = new java_util_ArrayList_ArrayList__V;
  this.fdi_ucm_server_interconect_model_StructureJSON_Multivalued = false;
  this.fdi_ucm_server_interconect_model_StructureJSON_Browseable = false;
  this.fdi_ucm_server_interconect_model_StructureJSON_ClaseOf = java_lang_Long_valueOf__JLjava_lang_Long_2({l:0, m:0, h:0});
  this.fdi_ucm_server_interconect_model_StructureJSON_Selected = false;
  this.fdi_ucm_server_interconect_model_StructureJSON_Filtro = false;
  this.fdi_ucm_server_interconect_model_StructureJSON_Value = '';
  this.fdi_ucm_server_interconect_model_StructureJSON_OperationalValues = new java_util_ArrayList_ArrayList__V;
  this.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure = (fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V() , fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Basic);
  this.fdi_ucm_server_interconect_model_StructureJSON_Extended = false;
  this.fdi_ucm_server_interconect_model_StructureJSON_ElementId = java_lang_Long_valueOf__JLjava_lang_Long_2({l:0, m:0, h:0});
  this.fdi_ucm_server_interconect_model_StructureJSON_SelectedValue = false;
  this.fdi_ucm_server_interconect_model_StructureJSON_Father = java_lang_Long_valueOf__JLjava_lang_Long_2({l:0, m:0, h:0});
  this.fdi_ucm_server_interconect_model_StructureJSON_URLValue = '';
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(13, 1, {13:1, 3:1}, fdi_ucm_server_interconect_model_StructureJSON_StructureJSON__V);
_.fdi_ucm_server_interconect_model_StructureJSON_Browseable = false;
_.fdi_ucm_server_interconect_model_StructureJSON_Extended = false;
_.fdi_ucm_server_interconect_model_StructureJSON_Filtro = false;
_.fdi_ucm_server_interconect_model_StructureJSON_Multivalued = false;
_.fdi_ucm_server_interconect_model_StructureJSON_Selected = false;
_.fdi_ucm_server_interconect_model_StructureJSON_SelectedValue = false;
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1StructureJSON_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_59, 'StructureJSON', 13);
function fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V(){
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text = new fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_StructureJSON$TypeOfStructureEnum__Ljava_lang_String_2IV('Text', 0);
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Resource = new fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_StructureJSON$TypeOfStructureEnum__Ljava_lang_String_2IV('Resource', 1);
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Link = new fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_StructureJSON$TypeOfStructureEnum__Ljava_lang_String_2IV('Link', 2);
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Basic = new fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_StructureJSON$TypeOfStructureEnum__Ljava_lang_String_2IV('Basic', 3);
}

function fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_StructureJSON$TypeOfStructureEnum__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_values___3Lfdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_2(){
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V();
  return com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1StructureJSON$TypeOfStructureEnum_12_1classLit, 1), $intern_12, 45, 0, [fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Resource, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Link, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Basic]);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(45, 8, {45:1, 3:1, 11:1, 8:1}, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_StructureJSON$TypeOfStructureEnum__Ljava_lang_String_2IV);
var fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Basic, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Link, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Resource, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text;
var com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1StructureJSON$TypeOfStructureEnum_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_59, 'StructureJSON/TypeOfStructureEnum', 45, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_values___3Lfdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_2);
function fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum$Map_$clinit__V(){
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum$Map_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum$Map_$MAP = java_lang_Enum_createValueOfMap___3Ljava_lang_Enum_2Lcom_google_gwt_core_client_JavaScriptObject_2((fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V() , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lfdi_1ucm_1server_1interconect_1model_1StructureJSON$TypeOfStructureEnum_12_1classLit, 1), $intern_12, 45, 0, [fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Resource, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Link, fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Basic])));
}

var fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum$Map_$MAP;
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(73, 1, {});
_.toString__Ljava_lang_String_2$ = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AbstractStringBuilder', 73);
function java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V(){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, 'divide by zero');
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(117, 12, $intern_5, java_lang_ArithmeticException_ArithmeticException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArithmeticException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ArithmeticException', 117);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(66, 12, $intern_5, java_lang_ArrayStoreException_ArrayStoreException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ArrayStoreException', 66);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Boolean_FALSE = new java_lang_Boolean_Boolean__ZV(false);
  new java_lang_Boolean_Boolean__ZV(true);
}

function java_lang_Boolean_Boolean__ZV(value_0){
  this.java_lang_Boolean_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(60, 1, {3:1, 60:1, 11:1}, java_lang_Boolean_Boolean__ZV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Boolean_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 60) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 60).java_lang_Boolean_value == this.java_lang_Boolean_value;
}
;
_.hashCode__I$ = function java_lang_Boolean_hashCode__I(){
  return this.java_lang_Boolean_value?1231:1237;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Boolean_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Boolean_value;
}
;
_.java_lang_Boolean_value = false;
var java_lang_Boolean_FALSE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Boolean', 60);
function java_lang_Character_digit__CII(c){
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

function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(51, 12, $intern_5, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ClassCastException', 51);
function java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_7);
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (java_lang_Character_digit__CII(s.charCodeAt(i)) == -1) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + s + '"');
  }
   else if (isTooLow || toReturn > $intern_1) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + s + '"');
  }
  return toReturn;
}

function java_lang_Number__1_1parseAndValidateLong__Ljava_lang_String_2IJ(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_7);
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > (java_lang_Number$_1_1ParseLong_$clinit__V() , java_lang_Number$_1_1ParseLong_maxLengthForRadix)[10]) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (java_lang_Character_digit__CII(s.charCodeAt(i)) == -1) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = java_lang_Number$_1_1ParseLong_maxDigitsForRadix[10];
  radixPower = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[10]);
  minValue = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(-java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s.substr(0, head), 10));
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s.substr(0, maxDigits), 10);
    s = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, minValue)) {
        throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + orig + '"');
      }
      toReturn = com_google_gwt_lang_LongLib_mul__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn, radixPower);
    }
    toReturn = com_google_gwt_lang_LongLib_sub__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(head));
  }
  if (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, {l:0, m:0, h:0})) {
    throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + orig + '"');
  }
  if (!negative) {
    toReturn = com_google_gwt_lang_LongLib_neg__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(toReturn);
    if (com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(toReturn, {l:0, m:0, h:0})) {
      throw new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V($intern_60 + orig + '"');
    }
  }
  return toReturn;
}

function java_lang_Number__1_1parseInt__Ljava_lang_String_2II(s, radix){
  return parseInt(s, radix);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(67, 1, {3:1, 67:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Number', 67);
function java_lang_Double_Double__DV(value_0){
  this.java_lang_Double_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(18, 67, {3:1, 11:1, 18:1, 67:1}, java_lang_Double_Double__DV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Double_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 18) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 18).java_lang_Double_value == this.java_lang_Double_value;
}
;
_.hashCode__I$ = function java_lang_Double_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(this.java_lang_Double_value);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Double_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Double_value;
}
;
_.java_lang_Double_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Double', 18);
function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(53, 12, $intern_5, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalArgumentException', 53);
function java_lang_IllegalStateException_IllegalStateException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(46, 12, $intern_5, java_lang_IllegalStateException_IllegalStateException__V, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalStateException', 46);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(57, 12, $intern_5, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IndexOutOfBoundsException', 57);
function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_numberOfLeadingZeros__II(i){
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

function java_lang_Integer_numberOfTrailingZeros__II(i){
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

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(52, 67, {3:1, 11:1, 52:1, 67:1}, java_lang_Integer_Integer__IV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 52) && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 52).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I$ = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Integer', 52);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_12, 52, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_Long_$equals__Ljava_lang_Long_2Ljava_lang_Object_2Z(this$static, o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 31) && com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 31).java_lang_Long_value, this$static.java_lang_Long_value);
}

function java_lang_Long_Long__JV(value_0){
  this.java_lang_Long_value = value_0;
}

function java_lang_Long_valueOf__JLjava_lang_Long_2(i){
  var rebase, result;
  if (com_google_gwt_lang_LongLib_gt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(i, {l:4194175, m:$intern_27, h:$intern_28}) && com_google_gwt_lang_LongLib_lt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(i, {l:128, m:0, h:0})) {
    rebase = com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(i) + 128;
    result = (java_lang_Long$BoxedValues_$clinit__V() , java_lang_Long$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Long$BoxedValues_boxedValues[rebase] = new java_lang_Long_Long__JV(i));
    return result;
  }
  return new java_lang_Long_Long__JV(i);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(31, 67, {3:1, 11:1, 31:1, 67:1}, java_lang_Long_Long__JV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_Long_equals__Ljava_lang_Object_2Z(o){
  return java_lang_Long_$equals__Ljava_lang_Long_2Ljava_lang_Object_2Z(this, o);
}
;
_.hashCode__I$ = function java_lang_Long_hashCode__I(){
  return com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(this.java_lang_Long_value);
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_Long_toString__Ljava_lang_String_2(){
  return '' + com_google_gwt_lang_LongLib_toString__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Ljava_lang_String_2(this.java_lang_Long_value);
}
;
_.java_lang_Long_value = {l:0, m:0, h:0};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Long_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Long', 31);
function java_lang_Long$BoxedValues_$clinit__V(){
  java_lang_Long$BoxedValues_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_Long$BoxedValues_boxedValues = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Long_12_1classLit, $intern_12, 31, 256, 0, 1);
}

var java_lang_Long$BoxedValues_boxedValues;
function java_lang_Math_abs__DD(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function java_lang_Math_max__III(y_0){
  return 0 > y_0?0:y_0;
}

function java_lang_Math_min__III(x_0){
  return x_0 < 5?x_0:5;
}

function java_lang_Math_pow__DDD(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(44, 12, $intern_5, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NullPointerException', 44);
function java_lang_Number$_1_1ParseLong_$clinit__V(){
  java_lang_Number$_1_1ParseLong_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  var i;
  java_lang_Number$_1_1ParseLong_maxDigitsForRadix = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_12, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  java_lang_Number$_1_1ParseLong_maxDigitsRadixPower = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, $intern_12, 0, 37, 7, 1);
  java_lang_Number$_1_1ParseLong_maxLengthForRadix = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_I_1classLit, 1), $intern_12, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  java_lang_Number$_1_1ParseLong_maxValueForRadix = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_J_1classLit, $intern_12, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[i] = com_google_gwt_lang_Cast_round_1int__DI(java_lang_Math_pow__DDD(i, java_lang_Number$_1_1ParseLong_maxDigitsForRadix[i]));
    java_lang_Number$_1_1ParseLong_maxValueForRadix[i] = com_google_gwt_lang_LongLib_div__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2({l:$intern_27, m:$intern_27, h:524287}, com_google_gwt_lang_LongLib_fromInt__ILcom_google_gwt_lang_LongLibBase$LongEmul_2(java_lang_Number$_1_1ParseLong_maxDigitsRadixPower[i]));
  }
}

var java_lang_Number$_1_1ParseLong_maxDigitsForRadix, java_lang_Number$_1_1ParseLong_maxDigitsRadixPower, java_lang_Number$_1_1ParseLong_maxLengthForRadix, java_lang_Number$_1_1ParseLong_maxValueForRadix;
function java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V(message){
  java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(29, 53, $intern_5, java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NumberFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NumberFormatException', 29);
function java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV(methodName, fileName, lineNumber){
  this.java_lang_StackTraceElement_className = $intern_10;
  this.java_lang_StackTraceElement_methodName = methodName;
  this.java_lang_StackTraceElement_fileName = fileName;
  this.java_lang_StackTraceElement_lineNumber = lineNumber;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(42, 1, {3:1, 42:1}, java_lang_StackTraceElement_StackTraceElement__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2IV);
_.equals__Ljava_lang_Object_2Z$ = function java_lang_StackTraceElement_equals__Ljava_lang_Object_2Z(other){
  var st;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 42)) {
    st = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 42);
    return this.java_lang_StackTraceElement_lineNumber == st.java_lang_StackTraceElement_lineNumber && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_lang_StackTraceElement_methodName, st.java_lang_StackTraceElement_methodName) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_lang_StackTraceElement_className, st.java_lang_StackTraceElement_className) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_lang_StackTraceElement_fileName, st.java_lang_StackTraceElement_fileName);
  }
  return false;
}
;
_.hashCode__I$ = function java_lang_StackTraceElement_hashCode__I(){
  return java_util_Arrays_hashCode___3Ljava_lang_Object_2I(com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, 1), $intern_12, 1, 3, [java_lang_Integer_valueOf__ILjava_lang_Integer_2(this.java_lang_StackTraceElement_lineNumber), this.java_lang_StackTraceElement_className, this.java_lang_StackTraceElement_methodName, this.java_lang_StackTraceElement_fileName]));
}
;
_.toString__Ljava_lang_String_2$ = function java_lang_StackTraceElement_toString__Ljava_lang_String_2(){
  return this.java_lang_StackTraceElement_className + '.' + this.java_lang_StackTraceElement_methodName + '(' + (this.java_lang_StackTraceElement_fileName != null?this.java_lang_StackTraceElement_fileName:'Unknown Source') + (this.java_lang_StackTraceElement_lineNumber >= 0?':' + this.java_lang_StackTraceElement_lineNumber:'') + ')';
}
;
_.java_lang_StackTraceElement_lineNumber = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StackTraceElement_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'StackTraceElement', 42);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return this$static === other;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.lastIndexOf(str);
}

function java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2II(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function java_lang_String_$split__Ljava_lang_String_2Ljava_lang_String_2I_3Ljava_lang_String_2(this$static, regex, maxMatch){
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
  var jr = java_lang_String__1_1createArray__I_3Ljava_lang_String_2(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function java_lang_String__1_1createArray__I_3Ljava_lang_String_2(numElements){
  return com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_12, 2, numElements, 4, 1);
}

function java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function java_lang_String_fromCodePoint__ILjava_lang_String_2(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_42) {
    hiSurrogate = 55296 + (codePoint - $intern_42 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_42 & 1023) & 65535;
    return java_lang_String_valueOf__CLjava_lang_String_2(hiSurrogate) + java_lang_String_valueOf__CLjava_lang_String_2(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function java_lang_String_valueOf__CLjava_lang_String_2(x_0){
  return String.fromCharCode(x_0);
}

var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'String', 2);
function java_lang_String$HashCache_$clinit__V(){
  java_lang_String$HashCache_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_lang_String$HashCache_back = {};
  java_lang_String$HashCache_front = {};
}

function java_lang_String$HashCache_compute__Ljava_lang_String_2I(str){
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
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function java_lang_String$HashCache_getHashCode__Ljava_lang_String_2I(str){
  java_lang_String$HashCache_$clinit__V();
  var key = ':' + str;
  var result = java_lang_String$HashCache_front[key];
  if (result != null) {
    return result;
  }
  result = java_lang_String$HashCache_back[key];
  result == null && (result = java_lang_String$HashCache_compute__Ljava_lang_String_2I(str));
  java_lang_String$HashCache_increment__V();
  return java_lang_String$HashCache_front[key] = result;
}

function java_lang_String$HashCache_increment__V(){
  if (java_lang_String$HashCache_count == 256) {
    java_lang_String$HashCache_back = java_lang_String$HashCache_front;
    java_lang_String$HashCache_front = {};
    java_lang_String$HashCache_count = 0;
  }
  ++java_lang_String$HashCache_count;
}

var java_lang_String$HashCache_back, java_lang_String$HashCache_count = 0, java_lang_String$HashCache_front;
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__V(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__IV(){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, '');
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(38, 73, {256:1}, java_lang_StringBuilder_StringBuilder__V, java_lang_StringBuilder_StringBuilder__IV, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'StringBuilder', 38);
function java_lang_UnsupportedOperationException_UnsupportedOperationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(32, 12, $intern_5, java_lang_UnsupportedOperationException_UnsupportedOperationException__V, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'UnsupportedOperationException', 32);
function java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var changed, e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  changed = false;
  for (e$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(c.java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(e$iterator);) {
    e = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(e$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, e$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(e$iterator)) , e$iterator.java_util_AbstractHashMap$EntrySetIterator_last = e$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 5));
    changed = changed | (java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(this$static, e, this$static.java_util_LinkedList_tail.java_util_LinkedList$Node_prev, this$static.java_util_LinkedList_tail) , true);
  }
  return changed;
}

function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      remove && iter.remove__V();
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

function java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  comma = false;
  for (e$iterator = this$static.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    sb.java_lang_AbstractStringBuilder_string += e === this$static?'(this Collection)':'' + e;
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(236, 1, {});
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, false);
}
;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractCollection_remove__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o, true);
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractCollection', 236);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key))) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this$static, key, remove){
  var entry, iter, k;
  for (iter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(iter);) {
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(iter.java_util_AbstractHashMap$EntrySetIterator_this$01, iter) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(iter)) , iter.java_util_AbstractHashMap$EntrySetIterator_last = iter.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(iter.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 5));
    k = entry.getKey__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(key) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(k) || key != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(key, k)) {
      if (remove) {
        entry = new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(entry.getKey__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
        java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(iter);
      }
      return entry;
    }
  }
  return null;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(235, 1, {49:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 49)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 49);
  if (this.java_util_AbstractHashMap_size != otherMap.size__I()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet__Ljava_util_Set_2().iterator__Ljava_util_Iterator_2(); entry$iterator.hasNext__Z();) {
    entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.next__Ljava_lang_Object_2(), 5);
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, false));
}
;
_.hashCode__I$ = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this));
}
;
_.isEmpty__Z = function java_util_AbstractMap_isEmpty__Z(){
  return this.java_util_AbstractHashMap_size == 0;
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Put not supported on this map');
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_AbstractMap_$implFindEntry__Ljava_util_AbstractMap_2Ljava_lang_Object_2ZLjava_util_Map$Entry_2(this, key, true));
}
;
_.size__I = function java_util_AbstractMap_size__I(){
  return (new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01.java_util_AbstractHashMap_size;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var comma, entry, entry$iterator, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  comma = false;
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator);) {
    entry = (java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_this$01, entry$iterator) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(entry$iterator)) , entry$iterator.java_util_AbstractHashMap$EntrySetIterator_last = entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry$iterator.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 5));
    comma?(sb.java_lang_AbstractStringBuilder_string += ', ' , sb):(comma = true);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()));
    sb.java_lang_AbstractStringBuilder_string += '=';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractMap', 235);
function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static){
  ++this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static){
  --this$static.java_util_AbstractHashMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
}

function java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):this$static.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key);
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):!(this$static.java_util_AbstractHashMap_stringMap.get__Ljava_lang_String_2Ljava_lang_Object_2(key) === undefined);
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0):java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return key == null?java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null, value_0):this$static.java_util_AbstractHashMap_stringMap.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0);
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_isJavaString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):this$static.java_util_AbstractHashMap_stringMap.remove__Ljava_lang_String_2Ljava_lang_Object_2(key):java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V();
  this$static.java_util_AbstractHashMap_hashCodeMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2();
  this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalJsHashCodeMap_host = this$static;
  this$static.java_util_AbstractHashMap_stringMap = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate.createJsStringMap__Ljava_util_InternalJsStringMap_2();
  this$static.java_util_AbstractHashMap_stringMap.java_util_InternalJsStringMap_host = this$static;
  this$static.java_util_AbstractHashMap_size = 0;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(114, 235, {49:1});
_.entrySet__Ljava_util_Set_2 = function java_util_AbstractHashMap_entrySet__Ljava_util_Set_2(){
  return new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractHashMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key);
}
;
_.size__I = function java_util_AbstractHashMap_size__I(){
  return this.java_util_AbstractHashMap_size;
}
;
_.java_util_AbstractHashMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractHashMap', 114);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(237, 236, $intern_62);
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 59)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 59);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I$ = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractSet', 237);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 5)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 5));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(43, 237, $intern_62, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_remove__Ljava_lang_Object_2Z(entry){
  var key;
  if (java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, entry)) {
    key = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(entry, 5).getKey__Ljava_lang_Object_2();
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractHashMap$EntrySet_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return this.java_util_AbstractHashMap$EntrySet_this$01.java_util_AbstractHashMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractHashMap/EntrySet', 43);
function java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap.entries__Ljava_util_Iterator_2();
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this$static){
  return java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static) , com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static)) , this$static.java_util_AbstractHashMap$EntrySetIterator_last = this$static.java_util_AbstractHashMap$EntrySetIterator_current , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 5);
}

function java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this$static){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this$static.java_util_AbstractHashMap$EntrySetIterator_last);
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  this$static.java_util_AbstractHashMap$EntrySetIterator_last.remove__V();
  this$static.java_util_AbstractHashMap$EntrySetIterator_last = null;
  java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap.entries__Ljava_util_Iterator_2();
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(this, this$0._gwt_modCount);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(61, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this);
}
;
_.remove__V = function java_util_AbstractHashMap$EntrySetIterator_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractHashMap/EntrySetIterator', 61);
function java_util_AbstractList_$equals__Ljava_util_AbstractList_2Ljava_lang_Object_2Z(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 6)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 6);
  if (this$static.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this$static.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(238, 236, {6:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list');
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  return java_util_AbstractList_$equals__Ljava_util_AbstractList_2Ljava_lang_Object_2Z(this, o);
}
;
_.hashCode__I$ = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return this.listIterator__ILjava_util_ListIterator_2(0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractList_remove__ILjava_lang_Object_2(index_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Remove not supported on this list');
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractList', 238);
function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(9, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I()) , this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.remove__V = function java_util_AbstractList$IteratorImpl_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(this.java_util_AbstractList$IteratorImpl_last != -1);
  this.java_util_AbstractList$IteratorImpl_this$01.remove__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last);
  this.java_util_AbstractList$IteratorImpl_i = this.java_util_AbstractList$IteratorImpl_last;
  this.java_util_AbstractList$IteratorImpl_last = -1;
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
_.java_util_AbstractList$IteratorImpl_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractList/IteratorImpl', 9);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  this.java_util_AbstractList$ListIteratorImpl_this$01 = this$0;
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(126, 9, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.hasPrevious__Z = function java_util_AbstractList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_AbstractList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i > 0);
  return this.java_util_AbstractList$ListIteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_last = --this.java_util_AbstractList$IteratorImpl_i);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractList/ListIteratorImpl', 126);
function java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this$static){
  var outerIter;
  outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01);
  return new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}

function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(87, 237, $intern_62, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(this);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_remove__Ljava_lang_Object_2Z(key){
  if (java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key)) {
    java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_AbstractMap$1_this$01, key);
    return true;
  }
  return false;
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return this.java_util_AbstractMap$1_this$01.java_util_AbstractHashMap_size;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractMap/1', 87);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(116, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return java_util_AbstractHashMap$EntrySetIterator_$hasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_lang_Object_2(this.java_util_AbstractMap$1$1_val$outerIter2);
  return entry.getKey__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_AbstractMap$1$1_remove__V(){
  java_util_AbstractHashMap$EntrySetIterator_$remove__Ljava_util_AbstractHashMap$EntrySetIterator_2V(this.java_util_AbstractMap$1$1_val$outerIter2);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractMap/1/1', 116);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(115, 1, {5:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 5)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 5);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I$ = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  var oldValue;
  oldValue = this.java_util_AbstractMap$AbstractEntry_value;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractMap/AbstractEntry', 115);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(86, 115, {5:1}, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractMap/SimpleEntry', 86);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(239, 1, {5:1});
_.equals__Ljava_lang_Object_2Z$ = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 5)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 5);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getKey__Ljava_lang_Object_2(), entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.getValue__Ljava_lang_Object_2(), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I$ = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getKey__Ljava_lang_Object_2()) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.getValue__Ljava_lang_Object_2());
}
;
_.toString__Ljava_lang_String_2$ = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.getKey__Ljava_lang_Object_2() + '=' + this.getValue__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractMapEntry', 239);
function java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(this$static, index_0){
  var iter;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this$static, index_0);
  try {
    return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(iter.java_util_LinkedList$ListIteratorImpl_currentNode != iter.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail) , iter.java_util_LinkedList$ListIteratorImpl_lastNode = iter.java_util_LinkedList$ListIteratorImpl_currentNode , iter.java_util_LinkedList$ListIteratorImpl_currentNode = iter.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next , ++iter.java_util_LinkedList$ListIteratorImpl_currentIndex , iter.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 41)) {
      throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V("Can't get element " + index_0);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(252, 238, {6:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractSequentialList_add__ILjava_lang_Object_2V(index_0, element){
  var iter;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index_0);
  java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(iter.java_util_LinkedList$ListIteratorImpl_this$01, element, iter.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev, iter.java_util_LinkedList$ListIteratorImpl_currentNode);
  ++iter.java_util_LinkedList$ListIteratorImpl_currentIndex;
  iter.java_util_LinkedList$ListIteratorImpl_lastNode = null;
}
;
_.get__ILjava_lang_Object_2 = function java_util_AbstractSequentialList_get__ILjava_lang_Object_2(index_0){
  return java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(this, index_0);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractSequentialList_iterator__Ljava_util_Iterator_2(){
  return java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, 0);
}
;
_.remove__ILjava_lang_Object_2 = function java_util_AbstractSequentialList_remove__ILjava_lang_Object_2(index_0){
  var iter, old;
  iter = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index_0);
  try {
    old = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(iter.java_util_LinkedList$ListIteratorImpl_currentNode != iter.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail) , iter.java_util_LinkedList$ListIteratorImpl_lastNode = iter.java_util_LinkedList$ListIteratorImpl_currentNode , iter.java_util_LinkedList$ListIteratorImpl_currentNode = iter.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next , ++iter.java_util_LinkedList$ListIteratorImpl_currentIndex , iter.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value);
    java_util_LinkedList$ListIteratorImpl_$remove__Ljava_util_LinkedList$ListIteratorImpl_2V(iter);
    return old;
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 41)) {
      throw new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V("Can't remove element " + index_0);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSequentialList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'AbstractSequentialList', 252);
function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_ArrayList_array, this$static.java_util_ArrayList_array.length, o);
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  var previous;
  previous = (com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(this$static.java_util_ArrayList_array, index_0, 1);
  return previous;
}

function java_util_ArrayList_$toArray__Ljava_util_ArrayList_2_3Ljava_lang_Object_2_3Ljava_lang_Object_2(this$static, out){
  var i, size_0, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0;
  size_0 = this$static.java_util_ArrayList_array.length;
  out.length < size_0 && (out = (com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0 = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(0, size_0) , com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(out), out.java_lang_Object_castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0) , com_google_gwt_lang_Array_createFrom___3Ljava_lang_Object_2I_3Ljava_lang_Object_2_result_0));
  for (i = 0; i < size_0; ++i) {
    com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, i, this$static.java_util_ArrayList_array[i]);
  }
  out.length > size_0 && com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(out, size_0, null);
  return out;
}

function java_util_ArrayList_ArrayList__V(){
  this.java_util_ArrayList_array = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_12, 1, 0, 3, 1);
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IIV(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(10, 238, $intern_63, java_util_ArrayList_ArrayList__V);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, this.java_util_ArrayList_array.length);
  java_util_ArrayList_splice___3Ljava_lang_Object_2IILjava_lang_Object_2V(this.java_util_ArrayList_array, index_0, 0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.remove__ILjava_lang_Object_2 = function java_util_ArrayList_remove__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_ArrayList_remove__Ljava_lang_Object_2Z(o){
  var i;
  i = java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0);
  if (i == -1) {
    return false;
  }
  this.remove__ILjava_lang_Object_2(i);
  return true;
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ArrayList', 10);
function java_util_Arrays_hashCode___3Ljava_lang_Object_2I(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function java_util_Collections_unmodifiableList__Ljava_util_List_2Ljava_util_List_2(list){
  java_util_Collections_$clinit__V();
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(list, 71)?new java_util_Collections$UnmodifiableRandomAccessList_Collections$UnmodifiableRandomAccessList__Ljava_util_List_2V(list):new java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V(list);
}

var java_util_Collections_EMPTY_1LIST;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(118, 238, $intern_63, java_util_Collections$EmptyList_Collections$EmptyList__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location_0){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(location_0, 0);
  return null;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptyList_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$EmptyList_listIterator__Ljava_util_ListIterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/EmptyList', 118);
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(119, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.hasPrevious__Z = function java_util_Collections$EmptyListIterator_hasPrevious__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_previous__Ljava_lang_Object_2(){
  throw new java_util_NoSuchElementException_NoSuchElementException__V;
}
;
_.remove__V = function java_util_Collections$EmptyListIterator_remove__V(){
  throw new java_lang_IllegalStateException_IllegalStateException__V;
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/EmptyListIterator', 119);
function java_util_Collections$UnmodifiableCollection_Collections$UnmodifiableCollection__Ljava_util_Collection_2V(coll){
  this.java_util_Collections$UnmodifiableCollection_coll = coll;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(88, 1, {});
_.add__Ljava_lang_Object_2Z = function java_util_Collections$UnmodifiableCollection_add__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$UnmodifiableCollection_iterator__Ljava_util_Iterator_2(){
  return new java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V(this.java_util_Collections$UnmodifiableCollection_coll.iterator__Ljava_util_Iterator_2());
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_Collections$UnmodifiableCollection_remove__Ljava_lang_Object_2Z(o){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.size__I = function java_util_Collections$UnmodifiableCollection_size__I(){
  return this.java_util_Collections$UnmodifiableCollection_coll.size__I();
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Collections$UnmodifiableCollection_toString__Ljava_lang_String_2(){
  return this.java_util_Collections$UnmodifiableCollection_coll.toString__Ljava_lang_String_2$();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableCollection', 88);
function java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V(it){
  this.java_util_Collections$UnmodifiableCollectionIterator_it = it;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(90, 1, {}, java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V);
_.hasNext__Z = function java_util_Collections$UnmodifiableCollectionIterator_hasNext__Z(){
  return this.java_util_Collections$UnmodifiableCollectionIterator_it.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableCollectionIterator_next__Ljava_lang_Object_2(){
  return this.java_util_Collections$UnmodifiableCollectionIterator_it.next__Ljava_lang_Object_2();
}
;
_.remove__V = function java_util_Collections$UnmodifiableCollectionIterator_remove__V(){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableCollectionIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableCollectionIterator', 90);
function java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V(list){
  java_util_Collections$UnmodifiableCollection_Collections$UnmodifiableCollection__Ljava_util_Collection_2V.call(this, list);
  this.java_util_Collections$UnmodifiableList_list = list;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(89, 88, {6:1}, java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V);
_.equals__Ljava_lang_Object_2Z$ = function java_util_Collections$UnmodifiableList_equals__Ljava_lang_Object_2Z(o){
  return this.java_util_Collections$UnmodifiableList_list.equals__Ljava_lang_Object_2Z$(o);
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$UnmodifiableList_get__ILjava_lang_Object_2(index_0){
  return this.java_util_Collections$UnmodifiableList_list.get__ILjava_lang_Object_2(index_0);
}
;
_.hashCode__I$ = function java_util_Collections$UnmodifiableList_hashCode__I(){
  return this.java_util_Collections$UnmodifiableList_list.hashCode__I$();
}
;
_.isEmpty__Z = function java_util_Collections$UnmodifiableList_isEmpty__Z(){
  return this.java_util_Collections$UnmodifiableList_list.isEmpty__Z();
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$UnmodifiableList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V(this.java_util_Collections$UnmodifiableList_list.listIterator__ILjava_util_ListIterator_2(0));
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_Collections$UnmodifiableList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V(this.java_util_Collections$UnmodifiableList_list.listIterator__ILjava_util_ListIterator_2(from));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableList', 89);
function java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V(lit){
  java_util_Collections$UnmodifiableCollectionIterator_Collections$UnmodifiableCollectionIterator__Ljava_util_Iterator_2V.call(this, lit);
  this.java_util_Collections$UnmodifiableListIterator_lit = lit;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(91, 90, {}, java_util_Collections$UnmodifiableListIterator_Collections$UnmodifiableListIterator__Ljava_util_ListIterator_2V);
_.hasPrevious__Z = function java_util_Collections$UnmodifiableListIterator_hasPrevious__Z(){
  return this.java_util_Collections$UnmodifiableListIterator_lit.hasPrevious__Z();
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableListIterator_previous__Ljava_lang_Object_2(){
  return this.java_util_Collections$UnmodifiableListIterator_lit.previous__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableListIterator', 91);
function java_util_Collections$UnmodifiableMap_Collections$UnmodifiableMap__Ljava_util_Map_2V(map_0){
  this.java_util_Collections$UnmodifiableMap_map = map_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(120, 1, {49:1}, java_util_Collections$UnmodifiableMap_Collections$UnmodifiableMap__Ljava_util_Map_2V);
_.entrySet__Ljava_util_Set_2 = function java_util_Collections$UnmodifiableMap_entrySet__Ljava_util_Set_2(){
  !this.java_util_Collections$UnmodifiableMap_entrySet && (this.java_util_Collections$UnmodifiableMap_entrySet = new java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_Collections$UnmodifiableMap$UnmodifiableEntrySet__Ljava_util_Set_2V(this.java_util_Collections$UnmodifiableMap_map.entrySet__Ljava_util_Set_2()));
  return this.java_util_Collections$UnmodifiableMap_entrySet;
}
;
_.equals__Ljava_lang_Object_2Z$ = function java_util_Collections$UnmodifiableMap_equals__Ljava_lang_Object_2Z(o){
  return this.java_util_Collections$UnmodifiableMap_map.equals__Ljava_lang_Object_2Z$(o);
}
;
_.get__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap_get__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  return this.java_util_Collections$UnmodifiableMap_map.get__Ljava_lang_Object_2Ljava_lang_Object_2(key);
}
;
_.hashCode__I$ = function java_util_Collections$UnmodifiableMap_hashCode__I(){
  return this.java_util_Collections$UnmodifiableMap_map.hashCode__I$();
}
;
_.isEmpty__Z = function java_util_Collections$UnmodifiableMap_isEmpty__Z(){
  return this.java_util_Collections$UnmodifiableMap_map.isEmpty__Z();
}
;
_.put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap_put__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.remove__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap_remove__Ljava_lang_Object_2Ljava_lang_Object_2(key){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.size__I = function java_util_Collections$UnmodifiableMap_size__I(){
  return this.java_util_Collections$UnmodifiableMap_map.size__I();
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Collections$UnmodifiableMap_toString__Ljava_lang_String_2(){
  return this.java_util_Collections$UnmodifiableMap_map.toString__Ljava_lang_String_2$();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableMap', 120);
com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(121, 88, $intern_62);
_.equals__Ljava_lang_Object_2Z$ = function java_util_Collections$UnmodifiableSet_equals__Ljava_lang_Object_2Z(o){
  return this.java_util_Collections$UnmodifiableCollection_coll.equals__Ljava_lang_Object_2Z$(o);
}
;
_.hashCode__I$ = function java_util_Collections$UnmodifiableSet_hashCode__I(){
  return this.java_util_Collections$UnmodifiableCollection_coll.hashCode__I$();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableSet', 121);
function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_Collections$UnmodifiableMap$UnmodifiableEntrySet__Ljava_util_Set_2V(s){
  java_util_Collections$UnmodifiableCollection_Collections$UnmodifiableCollection__Ljava_util_Collection_2V.call(this, s);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(122, 121, $intern_62, java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_Collections$UnmodifiableMap$UnmodifiableEntrySet__Ljava_util_Set_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_iterator__Ljava_util_Iterator_2(){
  var it;
  it = this.java_util_Collections$UnmodifiableCollection_coll.iterator__Ljava_util_Iterator_2();
  return new java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_Collections$UnmodifiableMap$UnmodifiableEntrySet$1__Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2V(it);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableMap$UnmodifiableEntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 122);
function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_Collections$UnmodifiableMap$UnmodifiableEntrySet$1__Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2V(val$it){
  this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_val$it2 = val$it;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(125, 1, {}, java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_Collections$UnmodifiableMap$UnmodifiableEntrySet$1__Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2V);
_.hasNext__Z = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_hasNext__Z(){
  return this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_val$it2.hasNext__Z();
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_next__Ljava_lang_Object_2(){
  return new java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry__Ljava_util_Map$Entry_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_val$it2.next__Ljava_lang_Object_2(), 5));
}
;
_.remove__V = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_remove__V(){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableMap$UnmodifiableEntrySet$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 125);
function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry__Ljava_util_Map$Entry_2V(entry){
  this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_entry = entry;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(123, 1, {5:1}, java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry__Ljava_util_Map$Entry_2V);
_.equals__Ljava_lang_Object_2Z$ = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_equals__Ljava_lang_Object_2Z(o){
  return this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_entry.equals__Ljava_lang_Object_2Z$(o);
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_entry.getKey__Ljava_lang_Object_2();
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_entry.getValue__Ljava_lang_Object_2();
}
;
_.hashCode__I$ = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_hashCode__I(){
  return this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_entry.hashCode__I$();
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  throw new java_lang_UnsupportedOperationException_UnsupportedOperationException__V;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_toString__Ljava_lang_String_2(){
  return this.java_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_entry.toString__Ljava_lang_String_2$();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 123);
function java_util_Collections$UnmodifiableRandomAccessList_Collections$UnmodifiableRandomAccessList__Ljava_util_List_2V(list){
  java_util_Collections$UnmodifiableList_Collections$UnmodifiableList__Ljava_util_List_2V.call(this, list);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(124, 89, {6:1, 71:1}, java_util_Collections$UnmodifiableRandomAccessList_Collections$UnmodifiableRandomAccessList__Ljava_util_List_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$UnmodifiableRandomAccessList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Collections/UnmodifiableRandomAccessList', 124);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new java_util_ConcurrentModificationException_ConcurrentModificationException__V;
  }
}

function java_util_ConcurrentModificationDetector_recordLastKnownStructure__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(iterator, host._gwt_modCount);
}

function java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(o, modCount){
  o._gwt_modCount = modCount;
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  java_util_ConcurrentModificationDetector_setModCount__Ljava_lang_Object_2IV(map_0, modCount + 1);
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(197, 12, $intern_5, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'ConcurrentModificationException', 197);
function java_util_Date_$toString__Ljava_util_Date_2Ljava_lang_String_2(this$static){
  var hourOffset, minuteOffset, offset;
  offset = -this$static.java_util_Date_jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return (java_util_Date$StringData_$clinit__V() , java_util_Date$StringData_DAYS)[this$static.java_util_Date_jsdate.getDay()] + ' ' + java_util_Date$StringData_MONTHS[this$static.java_util_Date_jsdate.getMonth()] + ' ' + java_util_Date_padTwo__ILjava_lang_String_2(this$static.java_util_Date_jsdate.getDate()) + ' ' + java_util_Date_padTwo__ILjava_lang_String_2(this$static.java_util_Date_jsdate.getHours()) + ':' + java_util_Date_padTwo__ILjava_lang_String_2(this$static.java_util_Date_jsdate.getMinutes()) + ':' + java_util_Date_padTwo__ILjava_lang_String_2(this$static.java_util_Date_jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this$static.java_util_Date_jsdate.getFullYear();
}

function java_util_Date_Date__JV(date){
  this.java_util_Date_jsdate = com_google_gwt_core_client_JsDate_create__DLcom_google_gwt_core_client_JsDate_2(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(date));
}

function java_util_Date_padTwo__ILjava_lang_String_2(number){
  return number < 10?'0' + number:'' + number;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(70, 1, {3:1, 11:1, 70:1}, java_util_Date_Date__JV);
_.equals__Ljava_lang_Object_2Z$ = function java_util_Date_equals__Ljava_lang_Object_2Z(obj){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 70) && com_google_gwt_lang_LongLib_eq__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Z(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(this.java_util_Date_jsdate.getTime()), com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 70).java_util_Date_jsdate.getTime()));
}
;
_.hashCode__I$ = function java_util_Date_hashCode__I(){
  var time;
  time = com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(this.java_util_Date_jsdate.getTime());
  return com_google_gwt_lang_LongLib_toInt__Lcom_google_gwt_lang_LongLibBase$LongEmul_2I(com_google_gwt_lang_LongLib_xor__Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2Lcom_google_gwt_lang_LongLibBase$LongEmul_2(time, com_google_gwt_lang_LongLib_shru__Lcom_google_gwt_lang_LongLibBase$LongEmul_2ILcom_google_gwt_lang_LongLibBase$LongEmul_2(time, 32)));
}
;
_.toString__Ljava_lang_String_2$ = function java_util_Date_toString__Ljava_lang_String_2(){
  return java_util_Date_$toString__Ljava_util_Date_2Ljava_lang_String_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Date_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'Date', 70);
function java_util_Date$StringData_$clinit__V(){
  java_util_Date$StringData_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_Date$StringData_DAYS = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_12, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  java_util_Date$StringData_MONTHS = com_google_gwt_lang_Array_initValues__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_12, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var java_util_Date$StringData_DAYS, java_util_Date$StringData_MONTHS;
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key){
  var hashCode;
  hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key);
  return ~~hashCode;
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(28, 114, {3:1, 49:1}, java_util_HashMap_HashMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'HashMap', 28);
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.java_util_HashSet_map, o);
}

function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o) != null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(79, 237, {3:1, 59:1}, java_util_HashSet_HashSet__V);
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
_.remove__Ljava_lang_Object_2Z = function java_util_HashSet_remove__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.size__I = function java_util_HashSet_size__I(){
  return this.java_util_HashSet_map.java_util_AbstractHashMap_size;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_HashSet_toString__Ljava_lang_String_2(){
  return java_util_AbstractCollection_$toString__Ljava_util_AbstractCollection_2Ljava_lang_String_2(new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'HashSet', 79);
function java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var map_0 = this$static.java_util_InternalJsHashCodeMap_backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode];
}

function java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode){
  return this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] || [];
}

function java_util_InternalJsHashCodeMap_$getEntry__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsHashCodeMap_backingMap);
}

function java_util_InternalJsHashCodeMap_$put__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = java_util_InternalJsHashCodeMap_$ensureChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, key == null?'0':'' + java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain, chain.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
  return null;
}

function java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + java_util_HashMap_$getHashCode__Ljava_util_HashMap_2Ljava_lang_Object_2I(key);
  chain = java_util_InternalJsHashCodeMap_$getChainOrEmpty__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      chain.length == 1?(delete this$static.java_util_InternalJsHashCodeMap_backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V(){
  this.java_util_InternalJsHashCodeMap_backingMap = this.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(93, 1, {}, java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap_entries__Ljava_util_Iterator_2(){
  return new java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsHashCodeMap', 93);
function java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this$static){
  if (this$static.java_util_InternalJsHashCodeMap$1_itemIndex < this$static.java_util_InternalJsHashCodeMap$1_chain.length) {
    return true;
  }
  if (this$static.java_util_InternalJsHashCodeMap$1_chainIndex < this$static.java_util_InternalJsHashCodeMap$1_keys.length - 1) {
    this$static.java_util_InternalJsHashCodeMap$1_chain = java_util_InternalJsHashCodeMap_$getChain__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_String_2_3Ljava_util_Map$Entry_2(this$static.java_util_InternalJsHashCodeMap$1_this$01, this$static.java_util_InternalJsHashCodeMap$1_keys[++this$static.java_util_InternalJsHashCodeMap$1_chainIndex]);
    this$static.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}

function java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V(this$0){
  this.java_util_InternalJsHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalJsHashCodeMap$1_keys = java_util_InternalJsHashCodeMap_$keys__Ljava_util_InternalJsHashCodeMap_2_3Ljava_lang_String_2(this.java_util_InternalJsHashCodeMap$1_this$01);
  this.java_util_InternalJsHashCodeMap$1_chain = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit, $intern_12, 5, 0, 0, 1);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(138, 1, {}, java_util_InternalJsHashCodeMap$1_InternalJsHashCodeMap$1__Ljava_util_InternalJsHashCodeMap_2V);
_.hasNext__Z = function java_util_InternalJsHashCodeMap$1_hasNext__Z(){
  return java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this);
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsHashCodeMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(java_util_InternalJsHashCodeMap$1_$hasNext__Ljava_util_InternalJsHashCodeMap$1_2Z(this)) , this.java_util_InternalJsHashCodeMap$1_lastChain = this.java_util_InternalJsHashCodeMap$1_chain , this.java_util_InternalJsHashCodeMap$1_lastEntry = this.java_util_InternalJsHashCodeMap$1_chain[this.java_util_InternalJsHashCodeMap$1_itemIndex++] , this.java_util_InternalJsHashCodeMap$1_lastEntry;
}
;
_.remove__V = function java_util_InternalJsHashCodeMap$1_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this.java_util_InternalJsHashCodeMap$1_lastEntry);
  java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_this$01, this.java_util_InternalJsHashCodeMap$1_lastEntry.getKey__Ljava_lang_Object_2());
  com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_chain) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$1_lastChain) && this.java_util_InternalJsHashCodeMap$1_chain.length != 1 && --this.java_util_InternalJsHashCodeMap$1_itemIndex;
  this.java_util_InternalJsHashCodeMap$1_lastEntry = null;
}
;
_.java_util_InternalJsHashCodeMap$1_chainIndex = -1;
_.java_util_InternalJsHashCodeMap$1_itemIndex = 0;
_.java_util_InternalJsHashCodeMap$1_lastChain = null;
_.java_util_InternalJsHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsHashCodeMap/1', 138);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V(){
  java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(136, 93, {}, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V);
_.package_private$java_util_InternalJsHashCodeMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  var map_0 = this.java_util_InternalJsHashCodeMap_backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add__Ljava_lang_Object_2Z(array[i]);
      }
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.private$java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 136);
function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V(this$1){
  this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(137, 10, $intern_63, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 5) , java_util_InternalJsHashCodeMap_$remove__Ljava_util_InternalJsHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_this$11, java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2()) , java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_$remove__Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 137);
function java_util_InternalJsMapFactory_InternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(133, 1, {}, java_util_InternalJsMapFactory_InternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap_InternalJsHashCodeMap__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap_InternalJsStringMap__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsMapFactory', 133);
function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate = java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2();
}

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z(){
  var protoField = $intern_64;
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

function java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_createFactory__Ljava_util_InternalJsMapFactory_2(){
  var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0;
  if (Object.create && Object.getOwnPropertyNames && java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_canHandleProto__Z()) {
    return (java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0 = Object.create(null) , java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0[$intern_64] = 42 , Object.getOwnPropertyNames(java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_needsKeysWorkaround__Z_map_0).length == 0)?new java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V:new java_util_InternalJsMapFactory_InternalJsMapFactory__V;
  }
  return new java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V;
}

var java_util_InternalJsMapFactory$BackwardCompatibleJsMapFactory_delegate;
function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(135, 133, {}, java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_InternalJsMapFactory$KeysWorkaroundJsMapFactory__V);
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$KeysWorkaroundJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 135);
function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(134, 133, {}, java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_InternalJsMapFactory$LegacyInternalJsMapFactory__V);
_.createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsHashCodeMap__Ljava_util_InternalJsHashCodeMap_2(){
  return new java_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy__V;
}
;
_.createJsStringMap__Ljava_util_InternalJsStringMap_2 = function java_util_InternalJsMapFactory$LegacyInternalJsMapFactory_createJsStringMap__Ljava_util_InternalJsStringMap_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsMapFactory$LegacyInternalJsMapFactory_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsMapFactory/LegacyInternalJsMapFactory', 134);
function java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this$static){
  return Object.getOwnPropertyNames(this$static.java_util_InternalJsStringMap_backingMap);
}

function java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalJsStringMap_backingMap[key];
  oldValue === undefined && java_util_AbstractHashMap_$elementAdded__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalJsStringMap_backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.java_util_InternalJsStringMap_backingMap[key];
    java_util_AbstractHashMap_$elementRemoved__Ljava_util_AbstractHashMap_2V(this$static.java_util_InternalJsStringMap_host);
  }
  return value_0;
}

function java_util_InternalJsStringMap_$set__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, key, value_0){
  this$static.java_util_InternalJsStringMap_backingMap[key] = value_0;
}

function java_util_InternalJsStringMap_InternalJsStringMap__V(){
  this.java_util_InternalJsStringMap_backingMap = this.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(74, 1, {}, java_util_InternalJsStringMap_InternalJsStringMap__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return Object.create(null);
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap_entries__Ljava_util_Iterator_2(){
  var keys_0;
  keys_0 = this.keys___3Ljava_lang_String_2();
  return new java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this, keys_0);
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[key];
}
;
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap_keys___3Ljava_lang_String_2(){
  return java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
}
;
_.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2 = function java_util_InternalJsStringMap_newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key){
  return new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this, key);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsStringMap', 74);
function java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V(this$0, val$keys){
  this.java_util_InternalJsStringMap$1_this$01 = this$0;
  this.java_util_InternalJsStringMap$1_val$keys2 = val$keys;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(130, 1, {}, java_util_InternalJsStringMap$1_InternalJsStringMap$1__Ljava_util_InternalJsStringMap_2V);
_.hasNext__Z = function java_util_InternalJsStringMap$1_hasNext__Z(){
  return this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_InternalJsStringMap$1_i < this.java_util_InternalJsStringMap$1_val$keys2.length) , new java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this.java_util_InternalJsStringMap$1_this$01, this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_last = this.java_util_InternalJsStringMap$1_i++]);
}
;
_.remove__V = function java_util_InternalJsStringMap$1_remove__V(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(this.java_util_InternalJsStringMap$1_last != -1);
  this.java_util_InternalJsStringMap$1_this$01.remove__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$1_val$keys2[this.java_util_InternalJsStringMap$1_last]);
  this.java_util_InternalJsStringMap$1_last = -1;
}
;
_.java_util_InternalJsStringMap$1_i = 0;
_.java_util_InternalJsStringMap$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsStringMap/1', 130);
function java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V(this$0, val$key){
  this.java_util_InternalJsStringMap$2_this$01 = this$0;
  this.java_util_InternalJsStringMap$2_val$key2 = val$key;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(92, 239, {5:1}, java_util_InternalJsStringMap$2_InternalJsStringMap$2__Ljava_util_InternalJsStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_val$key2;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_getValue__Ljava_lang_Object_2(){
  return this.java_util_InternalJsStringMap$2_this$01.get__Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return this.java_util_InternalJsStringMap$2_this$01.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$2_val$key2, object);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsStringMap/2', 92);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(127, 74, {}, java_util_InternalJsStringMap$InternalJsStringMapLegacy_InternalJsStringMap$InternalJsStringMapLegacy__V);
_.package_private$java_util_InternalJsStringMap$createMap__Lcom_google_gwt_core_client_JavaScriptObject_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_createMap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return {};
}
;
_.entries__Ljava_util_Iterator_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_entries__Ljava_util_Iterator_2(){
  var list = this.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2();
  for (var key in this.java_util_InternalJsStringMap_backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry__Ljava_lang_String_2Ljava_util_Map$Entry_2(key.substring(1));
      list.add__Ljava_lang_Object_2Z(entry);
    }
  }
  return list.iterator__Ljava_util_Iterator_2();
}
;
_.get__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_get__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return this.java_util_InternalJsStringMap_backingMap[':' + key];
}
;
_.private$java_util_InternalJsStringMap$InternalJsStringMapLegacy$newEntryList__Ljava_util_ArrayList_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_newEntryList__Ljava_util_ArrayList_2(){
  return new java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this);
}
;
_.put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_put__Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(key, value_0){
  return java_util_InternalJsStringMap_$put__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this, ':' + key, value_0);
}
;
_.remove__Ljava_lang_String_2Ljava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy_remove__Ljava_lang_String_2Ljava_lang_Object_2(key){
  return java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this, ':' + key);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsStringMap/InternalJsStringMapLegacy', 127);
function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V(this$1){
  this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11 = this$1;
  java_util_ArrayList_ArrayList__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(129, 10, $intern_63, java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_InternalJsStringMap$InternalJsStringMapLegacy$1__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2V);
_.remove__ILjava_lang_Object_2 = function java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_remove__ILjava_lang_Object_2(index_0){
  var java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
  return java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0 = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$remove__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0), 5) , java_util_InternalJsStringMap_$remove__Ljava_util_InternalJsStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this.java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_this$11, ':' + com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0.getKey__Ljava_lang_Object_2())) , java_util_InternalJsStringMap$InternalJsStringMapLegacy$1_$remove__Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2ILjava_util_Map$Entry_2_removed_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapLegacy$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsStringMap/InternalJsStringMapLegacy/1', 129);
function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V(){
  java_util_InternalJsStringMap_InternalJsStringMap__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(128, 74, {}, java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround__V);
_.keys___3Ljava_lang_String_2 = function java_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_keys___3Ljava_lang_String_2(){
  var keys_0;
  keys_0 = java_util_InternalJsStringMap_$keys__Ljava_util_InternalJsStringMap_2_3Ljava_lang_String_2(this);
  !(this.java_util_InternalJsStringMap_backingMap[$intern_64] === undefined) && (keys_0[keys_0.length] = $intern_64);
  return keys_0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 128);
function java_util_LinkedList_$$init__Ljava_util_LinkedList_2V(this$static){
  this$static.java_util_LinkedList_header = new java_util_LinkedList$Node_LinkedList$Node__V;
  this$static.java_util_LinkedList_tail = new java_util_LinkedList$Node_LinkedList$Node__V;
}

function java_util_LinkedList_$addLast__Ljava_util_LinkedList_2Ljava_lang_Object_2V(this$static, o){
  java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(this$static, o, this$static.java_util_LinkedList_tail.java_util_LinkedList$Node_prev, this$static.java_util_LinkedList_tail);
}

function java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(this$static, o, prev, next){
  var node;
  node = new java_util_LinkedList$Node_LinkedList$Node__V;
  node.java_util_LinkedList$Node_value = o;
  node.java_util_LinkedList$Node_prev = prev;
  node.java_util_LinkedList$Node_next = next;
  next.java_util_LinkedList$Node_prev = prev.java_util_LinkedList$Node_next = node;
  ++this$static.java_util_LinkedList_size;
}

function java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this$static, index_0){
  var i, node;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkPositionIndex__IIV(index_0, this$static.java_util_LinkedList_size);
  if (index_0 >= this$static.java_util_LinkedList_size >> 1) {
    node = this$static.java_util_LinkedList_tail;
    for (i = this$static.java_util_LinkedList_size; i > index_0; --i) {
      node = node.java_util_LinkedList$Node_prev;
    }
  }
   else {
    node = this$static.java_util_LinkedList_header.java_util_LinkedList$Node_next;
    for (i = 0; i < index_0; ++i) {
      node = node.java_util_LinkedList$Node_next;
    }
  }
  return new java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V(this$static, index_0, node);
}

function java_util_LinkedList_$removeNode__Ljava_util_LinkedList_2Ljava_util_LinkedList$Node_2Ljava_lang_Object_2(this$static, node){
  var oldValue;
  oldValue = node.java_util_LinkedList$Node_value;
  node.java_util_LinkedList$Node_next.java_util_LinkedList$Node_prev = node.java_util_LinkedList$Node_prev;
  node.java_util_LinkedList$Node_prev.java_util_LinkedList$Node_next = node.java_util_LinkedList$Node_next;
  node.java_util_LinkedList$Node_next = node.java_util_LinkedList$Node_prev = null;
  node.java_util_LinkedList$Node_value = null;
  --this$static.java_util_LinkedList_size;
  return oldValue;
}

function java_util_LinkedList_$reset__Ljava_util_LinkedList_2V(this$static){
  this$static.java_util_LinkedList_header.java_util_LinkedList$Node_next = this$static.java_util_LinkedList_tail;
  this$static.java_util_LinkedList_tail.java_util_LinkedList$Node_prev = this$static.java_util_LinkedList_header;
  this$static.java_util_LinkedList_header.java_util_LinkedList$Node_prev = this$static.java_util_LinkedList_tail.java_util_LinkedList$Node_next = null;
  this$static.java_util_LinkedList_size = 0;
}

function java_util_LinkedList_LinkedList__V(){
  java_util_LinkedList_$$init__Ljava_util_LinkedList_2V(this);
  java_util_LinkedList_$reset__Ljava_util_LinkedList_2V(this);
}

function java_util_LinkedList_LinkedList__Ljava_util_Collection_2V(c){
  java_util_LinkedList_$$init__Ljava_util_LinkedList_2V(this);
  java_util_LinkedList_$reset__Ljava_util_LinkedList_2V(this);
  java_util_AbstractCollection_$addAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, c);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(48, 252, {3:1, 6:1}, java_util_LinkedList_LinkedList__V, java_util_LinkedList_LinkedList__Ljava_util_Collection_2V);
_.add__Ljava_lang_Object_2Z = function java_util_LinkedList_add__Ljava_lang_Object_2Z(o){
  return java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(this, o, this.java_util_LinkedList_tail.java_util_LinkedList$Node_prev, this.java_util_LinkedList_tail) , true;
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_LinkedList_listIterator__ILjava_util_ListIterator_2(index_0){
  return java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this, index_0);
}
;
_.size__I = function java_util_LinkedList_size__I(){
  return this.java_util_LinkedList_size;
}
;
_.java_util_LinkedList_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'LinkedList', 48);
function java_util_LinkedList$ListIteratorImpl_$remove__Ljava_util_LinkedList$ListIteratorImpl_2V(this$static){
  var nextNode;
  com_google_gwt_core_shared_impl_InternalPreconditions_checkState__ZV(!!this$static.java_util_LinkedList$ListIteratorImpl_lastNode);
  nextNode = this$static.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_next;
  java_util_LinkedList_$removeNode__Ljava_util_LinkedList_2Ljava_util_LinkedList$Node_2Ljava_lang_Object_2(this$static.java_util_LinkedList$ListIteratorImpl_this$01, this$static.java_util_LinkedList$ListIteratorImpl_lastNode);
  this$static.java_util_LinkedList$ListIteratorImpl_currentNode == this$static.java_util_LinkedList$ListIteratorImpl_lastNode?(this$static.java_util_LinkedList$ListIteratorImpl_currentNode = nextNode):--this$static.java_util_LinkedList$ListIteratorImpl_currentIndex;
  this$static.java_util_LinkedList$ListIteratorImpl_lastNode = null;
}

function java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V(this$0, index_0, startNode){
  this.java_util_LinkedList$ListIteratorImpl_this$01 = this$0;
  this.java_util_LinkedList$ListIteratorImpl_currentNode = startNode;
  this.java_util_LinkedList$ListIteratorImpl_currentIndex = index_0;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(176, 1, {}, java_util_LinkedList$ListIteratorImpl_LinkedList$ListIteratorImpl__Ljava_util_LinkedList_2ILjava_util_LinkedList$Node_2V);
_.hasNext__Z = function java_util_LinkedList$ListIteratorImpl_hasNext__Z(){
  return this.java_util_LinkedList$ListIteratorImpl_currentNode != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail;
}
;
_.hasPrevious__Z = function java_util_LinkedList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_header;
}
;
_.next__Ljava_lang_Object_2 = function java_util_LinkedList$ListIteratorImpl_next__Ljava_lang_Object_2(){
  return com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_LinkedList$ListIteratorImpl_currentNode != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail) , this.java_util_LinkedList$ListIteratorImpl_lastNode = this.java_util_LinkedList$ListIteratorImpl_currentNode , this.java_util_LinkedList$ListIteratorImpl_currentNode = this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next , ++this.java_util_LinkedList$ListIteratorImpl_currentIndex , this.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_LinkedList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev != this.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_header);
  this.java_util_LinkedList$ListIteratorImpl_lastNode = this.java_util_LinkedList$ListIteratorImpl_currentNode = this.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_prev;
  --this.java_util_LinkedList$ListIteratorImpl_currentIndex;
  return this.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value;
}
;
_.remove__V = function java_util_LinkedList$ListIteratorImpl_remove__V(){
  java_util_LinkedList$ListIteratorImpl_$remove__Ljava_util_LinkedList$ListIteratorImpl_2V(this);
}
;
_.java_util_LinkedList$ListIteratorImpl_currentIndex = 0;
_.java_util_LinkedList$ListIteratorImpl_lastNode = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'LinkedList/ListIteratorImpl', 176);
function java_util_LinkedList$Node_LinkedList$Node__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(80, 1, {}, java_util_LinkedList$Node_LinkedList$Node__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1LinkedList$Node_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'LinkedList/Node', 80);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_61, 'Map/Entry');
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(41, 12, {3:1, 7:1, 4:1, 41:1}, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_61, 'NoSuchElementException', 41);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_logging_Level_$clinit__V(){
  java_util_logging_Level_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  java_util_logging_Level_ALL = new java_util_logging_Level$LevelAll_Level$LevelAll__V;
  java_util_logging_Level_CONFIG = new java_util_logging_Level$LevelConfig_Level$LevelConfig__V;
  java_util_logging_Level_FINE = new java_util_logging_Level$LevelFine_Level$LevelFine__V;
  java_util_logging_Level_FINER = new java_util_logging_Level$LevelFiner_Level$LevelFiner__V;
  java_util_logging_Level_FINEST = new java_util_logging_Level$LevelFinest_Level$LevelFinest__V;
  java_util_logging_Level_INFO = new java_util_logging_Level$LevelInfo_Level$LevelInfo__V;
  java_util_logging_Level_OFF = new java_util_logging_Level$LevelOff_Level$LevelOff__V;
  java_util_logging_Level_SEVERE = new java_util_logging_Level$LevelSevere_Level$LevelSevere__V;
  java_util_logging_Level_WARNING = new java_util_logging_Level$LevelWarning_Level$LevelWarning__V;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(243, 1, $intern_12);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level_getName__Ljava_lang_String_2(){
  return 'DUMMY';
}
;
_.intValue__I = function java_util_logging_Level_intValue__I(){
  return -1;
}
;
_.toString__Ljava_lang_String_2$ = function java_util_logging_Level_toString__Ljava_lang_String_2(){
  return this.getName__Ljava_lang_String_2();
}
;
var java_util_logging_Level_ALL, java_util_logging_Level_CONFIG, java_util_logging_Level_FINE, java_util_logging_Level_FINER, java_util_logging_Level_FINEST, java_util_logging_Level_INFO, java_util_logging_Level_OFF, java_util_logging_Level_SEVERE, java_util_logging_Level_WARNING;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level', 243);
function java_util_logging_Level$LevelAll_Level$LevelAll__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(142, 243, $intern_12, java_util_logging_Level$LevelAll_Level$LevelAll__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelAll_getName__Ljava_lang_String_2(){
  return 'ALL';
}
;
_.intValue__I = function java_util_logging_Level$LevelAll_intValue__I(){
  return -2147483648;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelAll_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelAll', 142);
function java_util_logging_Level$LevelConfig_Level$LevelConfig__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(143, 243, $intern_12, java_util_logging_Level$LevelConfig_Level$LevelConfig__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelConfig_getName__Ljava_lang_String_2(){
  return 'CONFIG';
}
;
_.intValue__I = function java_util_logging_Level$LevelConfig_intValue__I(){
  return 700;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelConfig_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelConfig', 143);
function java_util_logging_Level$LevelFine_Level$LevelFine__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(144, 243, $intern_12, java_util_logging_Level$LevelFine_Level$LevelFine__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFine_getName__Ljava_lang_String_2(){
  return 'FINE';
}
;
_.intValue__I = function java_util_logging_Level$LevelFine_intValue__I(){
  return 500;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFine_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelFine', 144);
function java_util_logging_Level$LevelFiner_Level$LevelFiner__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(145, 243, $intern_12, java_util_logging_Level$LevelFiner_Level$LevelFiner__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFiner_getName__Ljava_lang_String_2(){
  return 'FINER';
}
;
_.intValue__I = function java_util_logging_Level$LevelFiner_intValue__I(){
  return 400;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFiner_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelFiner', 145);
function java_util_logging_Level$LevelFinest_Level$LevelFinest__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(146, 243, $intern_12, java_util_logging_Level$LevelFinest_Level$LevelFinest__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFinest_getName__Ljava_lang_String_2(){
  return 'FINEST';
}
;
_.intValue__I = function java_util_logging_Level$LevelFinest_intValue__I(){
  return 300;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFinest_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelFinest', 146);
function java_util_logging_Level$LevelInfo_Level$LevelInfo__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(147, 243, $intern_12, java_util_logging_Level$LevelInfo_Level$LevelInfo__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelInfo_getName__Ljava_lang_String_2(){
  return 'INFO';
}
;
_.intValue__I = function java_util_logging_Level$LevelInfo_intValue__I(){
  return 800;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelInfo_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelInfo', 147);
function java_util_logging_Level$LevelOff_Level$LevelOff__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(148, 243, $intern_12, java_util_logging_Level$LevelOff_Level$LevelOff__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelOff_getName__Ljava_lang_String_2(){
  return 'OFF';
}
;
_.intValue__I = function java_util_logging_Level$LevelOff_intValue__I(){
  return $intern_1;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelOff_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelOff', 148);
function java_util_logging_Level$LevelSevere_Level$LevelSevere__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(149, 243, $intern_12, java_util_logging_Level$LevelSevere_Level$LevelSevere__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelSevere_getName__Ljava_lang_String_2(){
  return $intern_36;
}
;
_.intValue__I = function java_util_logging_Level$LevelSevere_intValue__I(){
  return 1000;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelSevere_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelSevere', 149);
function java_util_logging_Level$LevelWarning_Level$LevelWarning__V(){
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(150, 243, $intern_12, java_util_logging_Level$LevelWarning_Level$LevelWarning__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelWarning_getName__Ljava_lang_String_2(){
  return 'WARNING';
}
;
_.intValue__I = function java_util_logging_Level$LevelWarning_intValue__I(){
  return 900;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelWarning_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Level/LevelWarning', 150);
function java_util_logging_LogManager_$addLoggerImpl__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V(this$static, logger){
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_logging_LogManager_loggerMap, logger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_name, logger);
}

function java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(this$static, name_0){
  var logger, newLogger, java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0, java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_parentName_0;
  logger = com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$getStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_logging_LogManager_loggerMap, name_0), 68);
  if (!logger) {
    newLogger = new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(name_0);
    java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0 = newLogger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_name;
    java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_parentName_0 = java_lang_String__1_1substr__Ljava_lang_String_2IILjava_lang_String_2(java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0, 0, java_lang_Math_max__III(java_lang_String_$lastIndexOf__Ljava_lang_String_2Ljava_lang_String_2I(java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_name_0, java_lang_String_fromCodePoint__ILjava_lang_String_2(46))));
    java_util_logging_Logger_$setParent__Ljava_util_logging_Logger_2Ljava_util_logging_Logger_2V(newLogger, java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(this$static, java_util_logging_LogManager_$addLoggerAndEnsureParents__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V_parentName_0));
    java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_logging_LogManager_loggerMap, newLogger.java_util_logging_Logger_impl.com_google_gwt_logging_impl_LoggerImplRegular_name, newLogger);
    return newLogger;
  }
  return logger;
}

function java_util_logging_LogManager_LogManager__V(){
  this.java_util_logging_LogManager_loggerMap = new java_util_HashMap_HashMap__V;
}

function java_util_logging_LogManager_getLogManager__Ljava_util_logging_LogManager_2(){
  var rootLogger;
  if (!java_util_logging_LogManager_singleton) {
    java_util_logging_LogManager_singleton = new java_util_logging_LogManager_LogManager__V;
    rootLogger = new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V('');
    java_util_logging_Logger_$setLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2V(rootLogger, (java_util_logging_Level_$clinit__V() , java_util_logging_Level_INFO));
    java_util_logging_LogManager_$addLoggerImpl__Ljava_util_logging_LogManager_2Ljava_util_logging_Logger_2V(java_util_logging_LogManager_singleton, rootLogger);
  }
  return java_util_logging_LogManager_singleton;
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(132, 1, {}, java_util_logging_LogManager_LogManager__V);
var java_util_logging_LogManager_singleton;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1LogManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'LogManager', 132);
function java_util_logging_LogRecord_$setLoggerName__Ljava_util_logging_LogRecord_2Ljava_lang_String_2V(this$static, newName){
  this$static.java_util_logging_LogRecord_loggerName = newName;
}

function java_util_logging_LogRecord_LogRecord__Ljava_util_logging_Level_2Ljava_lang_String_2V(msg){
  this.java_util_logging_LogRecord_msg = msg;
  this.java_util_logging_LogRecord_millis = com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2(com_google_gwt_core_client_JsDate_now__D());
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(169, 1, $intern_12, java_util_logging_LogRecord_LogRecord__Ljava_util_logging_Level_2Ljava_lang_String_2V);
_.java_util_logging_LogRecord_loggerName = '';
_.java_util_logging_LogRecord_millis = {l:0, m:0, h:0};
_.java_util_logging_LogRecord_thrown = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1LogRecord_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'LogRecord', 169);
function java_util_logging_Logger_$log__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(this$static, msg, thrown){
  com_google_gwt_logging_impl_LoggerImplRegular_$log__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2Ljava_lang_String_2Ljava_lang_Throwable_2V(this$static.java_util_logging_Logger_impl, msg, thrown);
}

function java_util_logging_Logger_$setLevel__Ljava_util_logging_Logger_2Ljava_util_logging_Level_2V(this$static, newLevel){
  com_google_gwt_logging_impl_LoggerImplRegular_$setLevel__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Level_2V(this$static.java_util_logging_Logger_impl, newLevel);
}

function java_util_logging_Logger_$setParent__Ljava_util_logging_Logger_2Ljava_util_logging_Logger_2V(this$static, newParent){
  com_google_gwt_logging_impl_LoggerImplRegular_$setParent__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_util_logging_Logger_2V(this$static.java_util_logging_Logger_impl, newParent);
}

function java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(name_0){
  this.java_util_logging_Logger_impl = new com_google_gwt_logging_impl_LoggerImplSevere_LoggerImplSevere__V;
  com_google_gwt_logging_impl_LoggerImplRegular_$setName__Lcom_google_gwt_logging_impl_LoggerImplRegular_2Ljava_lang_String_2V(this.java_util_logging_Logger_impl, name_0);
}

function java_util_logging_Logger_getLogger__Ljava_lang_String_2Ljava_util_logging_Logger_2(name_0){
  new com_google_gwt_logging_impl_LoggerImplSevere_LoggerImplSevere__V;
  return java_util_logging_LogManager_$ensureLogger__Ljava_util_logging_LogManager_2Ljava_lang_String_2Ljava_util_logging_Logger_2(java_util_logging_LogManager_getLogManager__Ljava_util_logging_LogManager_2(), name_0);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(68, 1, {68:1}, java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Logger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'Logger', 68);
function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$CreaLosPaneles__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2V(this$static){
  var PanelCentral, PanelImgTra2, PanelLabelTag, PanelMetaUsed, PanelRemovedT, SP;
  SP = new com_google_gwt_user_client_ui_ScrollPanel_ScrollPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelPrincipal, SP);
  PanelCentral = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V;
  com_google_gwt_user_client_ui_SimplePanel_$add__Lcom_google_gwt_user_client_ui_SimplePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(SP, PanelCentral);
  (com_google_gwt_user_client_DOM_$clinit__V() , PanelCentral.com_google_gwt_user_client_ui_UIObject_element).style[$intern_48] = $intern_49;
  PanelLabelTag = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelCentral, PanelLabelTag);
  PanelLabelTag.com_google_gwt_user_client_ui_UIObject_element.style[$intern_50] = $intern_49;
  PanelLabelTag.com_google_gwt_user_client_ui_UIObject_element.style[$intern_48] = $intern_49;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelPhrases = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelLabelTag, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelPhrases);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelPhrases, 'panelPhrases');
  com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelPhrases);
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelAuto = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelLabelTag, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelAuto);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelAuto, 'panelAuto');
  com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelAuto);
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelManual = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelLabelTag, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelManual);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelManual, 'panelManual');
  com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelManual);
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  PanelRemovedT = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelLabelTag, PanelRemovedT);
  com_google_gwt_user_client_ui_UIObject_setStyleName__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2ZV(PanelRemovedT.com_google_gwt_user_client_ui_UIObject_element, 'panelRemoved');
  PanelRemovedT.com_google_gwt_user_client_ui_UIObject_element.style[$intern_50] = $intern_49;
  PanelRemovedT.com_google_gwt_user_client_ui_UIObject_element.style[$intern_48] = $intern_49;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemDocu = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelRemovedT, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemDocu);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemDocu, 'panelRemD');
  com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemDocu);
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemGlob = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelRemovedT, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemGlob);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemGlob, 'panelRemI');
  com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelRemGlob);
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  PanelMetaUsed = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelCentral, PanelMetaUsed);
  PanelMetaUsed.com_google_gwt_user_client_ui_UIObject_element.style[$intern_48] = $intern_49;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelMetamap = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelMetaUsed, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelMetamap);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelMetamap, 'panelMetamap');
  com_google_gwt_user_client_ui_UIObject_$setHeight__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelMetamap);
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelUsed = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelMetaUsed, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelUsed);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelUsed, 'panelUses');
  com_google_gwt_user_client_ui_UIObject_$setHeight__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelUsed);
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImgTra = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelCentral, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImgTra);
  com_google_gwt_user_client_ui_UIObject_$setSize__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImgTra);
  PanelImgTra2 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImgTra, PanelImgTra2);
  PanelImgTra2.com_google_gwt_user_client_ui_UIObject_element.style[$intern_50] = $intern_49;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImg = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelImgTra2, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImg);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelImg, 'panelImages');
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelTra = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(PanelImgTra2, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelTra);
  com_google_gwt_user_client_ui_UIObject_$setStyleName__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2ZV(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelTra, 'panelTraduct');
  new com_google_gwt_user_client_ui_Image_Image__Ljava_lang_String_2V;
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$gotContext__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Ljava_util_List_2Ljava_lang_Long_2Lfdi_ucm_server_interconect_model_StructureJSON_2(this$static, listaS, contextId){
  var S, structterJSON, structterJSON$iterator;
  for (structterJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(listaS); structterJSON$iterator.java_util_AbstractList$IteratorImpl_i < structterJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    structterJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(structterJSON$iterator.java_util_AbstractList$IteratorImpl_i < structterJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(structterJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(structterJSON$iterator.java_util_AbstractList$IteratorImpl_last = structterJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 13));
    if (java_lang_Long_$equals__Ljava_lang_Long_2Ljava_lang_Object_2Z(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(structterJSON.fdi_ucm_server_interconect_model_StructureJSON_Id, 0), 31), contextId))
      return structterJSON;
    else {
      S = ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$gotContext__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Ljava_util_List_2Ljava_lang_Long_2Lfdi_ucm_server_interconect_model_StructureJSON_2(this$static, structterJSON.fdi_ucm_server_interconect_model_StructureJSON_Sons, contextId);
      if (S)
        return S;
    }
  }
  return null;
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$persistJS__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2V(this$static){
  java_lang_Object_$toString__Ljava_lang_Object_2Ljava_lang_String_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Documento);
  ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$setVariableBase2__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONObject_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Documento, this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_RandomIdVars);
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$setVariableBase2__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONObject_2(documento2, randomIdVars2){
  var DocumentoJ, ucm_fdi_ilsa_client_CreateJSONObject_create__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lcom_google_gwt_json_client_JSONObject_2_DocumentoJ_0;
  DocumentoJ = (ucm_fdi_ilsa_client_CreateJSONObject_create__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lcom_google_gwt_json_client_JSONObject_2_DocumentoJ_0 = new com_google_gwt_json_client_JSONObject_JSONObject__V , com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(ucm_fdi_ilsa_client_CreateJSONObject_create__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lcom_google_gwt_json_client_JSONObject_2_DocumentoJ_0, 'Documento', ucm_fdi_ilsa_client_CreateJSONObject_CreateDocIn__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Lcom_google_gwt_json_client_JSONValue_2(documento2.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Documento)) , com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(ucm_fdi_ilsa_client_CreateJSONObject_create__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lcom_google_gwt_json_client_JSONObject_2_DocumentoJ_0, $intern_65, ucm_fdi_ilsa_client_CreateJSONObject_CreateGramIn__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONValue_2(documento2.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Gramaticas)) , ucm_fdi_ilsa_client_CreateJSONObject_create__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lcom_google_gwt_json_client_JSONObject_2_DocumentoJ_0);
  ucm_fdi_ilsa_client_CompositeDocumentEditionProto_setVariableBase3__Ljava_lang_String_2Ljava_lang_String_2V(com_google_gwt_json_client_JSONObject_$toString__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2(DocumentoJ), randomIdVars2);
  return DocumentoJ;
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$test__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_List_2(this$static, sS){
  var CUIBoo, Errores, GSFin, Gr, Gr$iterator, ListPosition, ListSemantic, OperaValTyJSON, OperaValTyJSON$iterator, PositionsList, SSFin, SSPadre, SemanticList, SourceAutoBien, TermBien, ViewstructureJSON, ViewstructureJSON$iterator, ViewstructureJSON$iterator0, ZonaBUsqueda, err, err$iterator, err$iterator0, structureJSON, structureJSON$iterator, structureJSON$iterator0, structureJSON$iterator1, termElem, termElem$iterator;
  Errores = new java_util_ArrayList_ArrayList__V;
  ZonaBUsqueda = null;
  SSPadre = sS.fdi_ucm_server_interconect_model_StructureJSON_Father;
  if (SSPadre) {
    SSFin = null;
    for (Gr$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Documento.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Gramaticas); Gr$iterator.java_util_AbstractList$IteratorImpl_i < Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
      Gr = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(Gr$iterator.java_util_AbstractList$IteratorImpl_i < Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(Gr$iterator.java_util_AbstractList$IteratorImpl_last = Gr$iterator.java_util_AbstractList$IteratorImpl_i++), 56));
      SSFin = ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$gotContext__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Ljava_util_List_2Ljava_lang_Long_2Lfdi_ucm_server_interconect_model_StructureJSON_2(this$static, Gr.fdi_ucm_server_interconect_model_GrammarJSON_ListaS, SSPadre);
      if (SSFin)
        break;
    }
    !!SSFin && (ZonaBUsqueda = SSFin.fdi_ucm_server_interconect_model_StructureJSON_Sons);
  }
   else {
    GSFin = null;
    for (Gr$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Documento.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Gramaticas); Gr$iterator.java_util_AbstractList$IteratorImpl_i < Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
      Gr = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(Gr$iterator.java_util_AbstractList$IteratorImpl_i < Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(Gr$iterator.java_util_AbstractList$IteratorImpl_last = Gr$iterator.java_util_AbstractList$IteratorImpl_i++), 56));
      SSFin = ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$gotContext__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Ljava_util_List_2Ljava_lang_Long_2Lfdi_ucm_server_interconect_model_StructureJSON_2(this$static, Gr.fdi_ucm_server_interconect_model_GrammarJSON_ListaS, com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(sS.fdi_ucm_server_interconect_model_StructureJSON_Id, 0), 31));
      if (SSFin) {
        GSFin = Gr;
        break;
      }
    }
    !!GSFin && (ZonaBUsqueda = GSFin.fdi_ucm_server_interconect_model_GrammarJSON_ListaS);
  }
  !ZonaBUsqueda && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'I cant found the context correct father') , true);
  sS.fdi_ucm_server_interconect_model_StructureJSON_Multivalued || (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Term structure element should be multivalued') , true);
  sS.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure != (fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V() , fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text) && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Term structure element should be text type') , true);
  TermBien = false;
  SourceAutoBien = false;
  for (OperaValTyJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(sS.fdi_ucm_server_interconect_model_StructureJSON_Shows); OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_i < OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    OperaValTyJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_i < OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_last = OperaValTyJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 40));
    java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(OperaValTyJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(OperaValTyJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), $intern_67) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(OperaValTyJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), 'term') && (TermBien = true);
    java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(OperaValTyJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(OperaValTyJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), 'source') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(OperaValTyJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), 'auto') && (SourceAutoBien = true);
    if (TermBien && SourceAutoBien)
      break;
  }
  TermBien || (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Term structure element view should have term type proto->type->term') , true);
  SourceAutoBien || (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Term structure element view should have term type proto->source->auto') , true);
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_TermElements = new java_util_LinkedList_LinkedList__V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_UteranciasBien = new java_util_LinkedList_LinkedList__V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ImagenesBien = new java_util_LinkedList_LinkedList__V;
  for (structureJSON$iterator0 = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(ZonaBUsqueda); structureJSON$iterator0.java_util_AbstractList$IteratorImpl_i < structureJSON$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    structureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(structureJSON$iterator0.java_util_AbstractList$IteratorImpl_i < structureJSON$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(structureJSON$iterator0.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(structureJSON$iterator0.java_util_AbstractList$IteratorImpl_last = structureJSON$iterator0.java_util_AbstractList$IteratorImpl_i++), 13));
    (java_util_AbstractList_$equals__Ljava_util_AbstractList_2Ljava_lang_Object_2Z(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Id, sS.fdi_ucm_server_interconect_model_StructureJSON_ClaseOf) || java_lang_Long_$equals__Ljava_lang_Long_2Ljava_lang_Object_2Z(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_ClaseOf, sS.fdi_ucm_server_interconect_model_StructureJSON_ClaseOf)) && (java_util_LinkedList_$addLast__Ljava_util_LinkedList_2Ljava_lang_Object_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_TermElements, structureJSON) , true);
    if (structureJSON.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure == fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text)
      for (ViewstructureJSON$iterator0 = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Shows); ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        ViewstructureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_last = ViewstructureJSON$iterator0.java_util_AbstractList$IteratorImpl_i++), 40));
        java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), $intern_67) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), 'utterance') && (java_util_LinkedList_$addLast__Ljava_util_LinkedList_2Ljava_lang_Object_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_UteranciasBien, structureJSON) , true);
      }
    if (structureJSON.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure == fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Resource)
      for (ViewstructureJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Shows); ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        ViewstructureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_last = ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 40));
        java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), $intern_67) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), 'image') && (java_util_LinkedList_$addLast__Ljava_util_LinkedList_2Ljava_lang_Object_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ImagenesBien, structureJSON) , true);
      }
  }
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_UteranciasBien.java_util_LinkedList_size == 0 && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'I cant found Utterances structure element in this context father with view proto->type->utterance') , true);
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ImagenesBien.java_util_LinkedList_size == 0 && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'I cant found Images structure element in this context fathe with view proto->type->image') , true);
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_UteranciasBien.java_util_LinkedList_size != 0 && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_UteranciasBien, 0), 13).fdi_ucm_server_interconect_model_StructureJSON_Multivalued && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Utterances structure element should be multivalued') , true);
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ImagenesBien.java_util_LinkedList_size != 0 && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ImagenesBien, 0), 13).fdi_ucm_server_interconect_model_StructureJSON_Multivalued && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Images structure element should be multivalued') , true);
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Posicion = new java_util_HashMap_HashMap__V;
  this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Seman = new java_util_HashMap_HashMap__V;
  for (termElem$iterator = java_util_LinkedList_$listIterator__Ljava_util_LinkedList_2ILjava_util_ListIterator_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_TermElements, 0); termElem$iterator.java_util_LinkedList$ListIteratorImpl_currentNode != termElem$iterator.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail;) {
    termElem = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(termElem$iterator.java_util_LinkedList$ListIteratorImpl_currentNode != termElem$iterator.java_util_LinkedList$ListIteratorImpl_this$01.java_util_LinkedList_tail) , termElem$iterator.java_util_LinkedList$ListIteratorImpl_lastNode = termElem$iterator.java_util_LinkedList$ListIteratorImpl_currentNode , termElem$iterator.java_util_LinkedList$ListIteratorImpl_currentNode = termElem$iterator.java_util_LinkedList$ListIteratorImpl_currentNode.java_util_LinkedList$Node_next , ++termElem$iterator.java_util_LinkedList$ListIteratorImpl_currentIndex , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(termElem$iterator.java_util_LinkedList$ListIteratorImpl_lastNode.java_util_LinkedList$Node_value, 13));
    PositionsList = new java_util_LinkedList_LinkedList__V;
    for (structureJSON$iterator1 = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(termElem.fdi_ucm_server_interconect_model_StructureJSON_Sons); structureJSON$iterator1.java_util_AbstractList$IteratorImpl_i < structureJSON$iterator1.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
      structureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(structureJSON$iterator1.java_util_AbstractList$IteratorImpl_i < structureJSON$iterator1.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(structureJSON$iterator1.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(structureJSON$iterator1.java_util_AbstractList$IteratorImpl_last = structureJSON$iterator1.java_util_AbstractList$IteratorImpl_i++), 13));
      if (structureJSON.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure == fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text)
        for (ViewstructureJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Shows); ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
          ViewstructureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_last = ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 40));
          java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), $intern_67) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), $intern_53) && (java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(PositionsList, structureJSON, PositionsList.java_util_LinkedList_tail.java_util_LinkedList$Node_prev, PositionsList.java_util_LinkedList_tail) , true);
        }
    }
    SemanticList = new java_util_LinkedList_LinkedList__V;
    for (structureJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(termElem.fdi_ucm_server_interconect_model_StructureJSON_Sons); structureJSON$iterator.java_util_AbstractList$IteratorImpl_i < structureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
      structureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(structureJSON$iterator.java_util_AbstractList$IteratorImpl_i < structureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(structureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(structureJSON$iterator.java_util_AbstractList$IteratorImpl_last = structureJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 13));
      if (structureJSON.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure == fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text)
        for (ViewstructureJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Shows); ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
          ViewstructureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_last = ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 40));
          java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), $intern_67) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), 'semantic') && (java_util_LinkedList_$addNode__Ljava_util_LinkedList_2Ljava_lang_Object_2Ljava_util_LinkedList$Node_2Ljava_util_LinkedList$Node_2V(SemanticList, structureJSON, SemanticList.java_util_LinkedList_tail.java_util_LinkedList$Node_prev, SemanticList.java_util_LinkedList_tail) , true);
        }
    }
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Posicion, termElem, PositionsList);
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Seman, termElem, SemanticList);
  }
  for (err$iterator0 = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(Errores); err$iterator0.java_util_AbstractList$IteratorImpl_i < err$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    err = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(err$iterator0.java_util_AbstractList$IteratorImpl_i < err$iterator0.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(err$iterator0.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(err$iterator0.java_util_AbstractList$IteratorImpl_last = err$iterator0.java_util_AbstractList$IteratorImpl_i++)));
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('E2:' + err);
  }
  ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('TP:' + this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Posicion.java_util_AbstractHashMap_size);
  ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('TS:' + this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Posicion.java_util_AbstractHashMap_size);
  ListSemantic = new java_util_LinkedList_LinkedList__Ljava_util_Collection_2V(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Seman));
  ListPosition = new java_util_LinkedList_LinkedList__Ljava_util_Collection_2V(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Termino_1Posicion));
  ListPosition.java_util_LinkedList_size != 0 && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListPosition, 0), 5).getValue__Ljava_lang_Object_2(), 6).isEmpty__Z() && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Term structure element should have almost one Position structure element with position view proto->type->position') , true);
  ListPosition.java_util_LinkedList_size != 0 && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListPosition, 0), 5).getValue__Ljava_lang_Object_2(), 6).isEmpty__Z() && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListPosition, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Multivalued && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Position structure element should be multivalued') , true);
  ListSemantic.java_util_LinkedList_size != 0 && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).isEmpty__Z() && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Term element should have almost one Semantic element with semantic view proto->type->semantic') , true);
  ListSemantic.java_util_LinkedList_size != 0 && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).isEmpty__Z() && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Multivalued && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Semantic structure element should be multivalued') , true);
  if (ListSemantic.java_util_LinkedList_size != 0 && !com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).isEmpty__Z() && com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Sons.java_util_ArrayList_array.length != 0) {
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('TP1: ' + ListSemantic.java_util_LinkedList_size);
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('TP2: ' + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).size__I());
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('TP3: ' + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Sons.java_util_ArrayList_array.length);
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('TP4: ' + com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Sons, 0), 13).fdi_ucm_server_interconect_model_StructureJSON_Shows.java_util_ArrayList_array.length);
    CUIBoo = false;
    for (ViewstructureJSON$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Sons, 0), 13).fdi_ucm_server_interconect_model_StructureJSON_Shows); ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
      ViewstructureJSON = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i < ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_last = ViewstructureJSON$iterator.java_util_AbstractList$IteratorImpl_i++), 40));
      java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View.toLowerCase(), $intern_66) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name.toLowerCase(), $intern_67) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(ViewstructureJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default.toLowerCase(), 'cui') && (CUIBoo = true);
    }
    CUIBoo?com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractSequentialList_$get__Ljava_util_AbstractSequentialList_2ILjava_lang_Object_2(ListSemantic, 0), 5).getValue__Ljava_lang_Object_2(), 6).get__ILjava_lang_Object_2(0), 13).fdi_ucm_server_interconect_model_StructureJSON_Sons, 0), 13).fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure != fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Text && (com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Semantic element should have a CUI element with Text Type') , true):(com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(Errores.java_util_ArrayList_array, Errores.java_util_ArrayList_array.length, 'Semantic structure element should have a CUI element with CUI view proto->type->cui') , true);
  }
  for (err$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(Errores); err$iterator.java_util_AbstractList$IteratorImpl_i < err$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    err = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(err$iterator.java_util_AbstractList$IteratorImpl_i < err$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(err$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(err$iterator.java_util_AbstractList$IteratorImpl_last = err$iterator.java_util_AbstractList$IteratorImpl_i++)));
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('E2:' + err);
  }
  return Errores;
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_CompositeDocumentEditionProto__Ljava_lang_String_2Ljava_lang_Long_2IZV(randomIdVars, contextId){
  var Errores, Gr, Gr$iterator, JSOSucion, RP, SDocumentoS, SS, T4, T5, VP, string, string$iterator, ucm_fdi_ilsa_client_CreateJSONObject_create__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2_DocumentoJ_0;
  this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_RandomIdVars = randomIdVars;
  this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Width = com_google_gwt_dom_client_Document_$getClientWidth__Lcom_google_gwt_dom_client_Document_2I($doc);
  this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Width > 515 && (this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Width = this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Width - 315);
  this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ContextId = contextId;
  RP = com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_RandomIdVars);
  VP = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  VP.com_google_gwt_user_client_ui_CellPanel_table[$intern_54] = 20;
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(RP, VP, (com_google_gwt_user_client_DOM_$clinit__V() , RP.com_google_gwt_user_client_ui_UIObject_element));
  this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_PanelPrincipal = VP;
  SDocumentoS = ucm_fdi_ilsa_client_CompositeDocumentEditionProto_getVariableBaseJSONOBJS__Ljava_lang_String_2Ljava_lang_String_2(this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_RandomIdVars);
  JSOSucion = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(SDocumentoS), 30));
  this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Documento = (ucm_fdi_ilsa_client_CreateJSONObject_create__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2_DocumentoJ_0 = new fdi_ucm_server_interconect_model_DocumentCompleteJSON_DocumentCompleteJSON__V , fdi_ucm_server_interconect_model_DocumentCompleteJSON_$setDocumento__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Lfdi_ucm_server_interconect_model_DocumentsJSON_2V(ucm_fdi_ilsa_client_CreateJSONObject_create__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2_DocumentoJ_0, ucm_fdi_ilsa_client_CreateJSONObject_createDocument__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentsJSON_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(JSOSucion, 'Documento').isObject__Lcom_google_gwt_json_client_JSONObject_2())) , fdi_ucm_server_interconect_model_DocumentCompleteJSON_$setGramatica__Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2Ljava_util_ArrayList_2V(ucm_fdi_ilsa_client_CreateJSONObject_create__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2_DocumentoJ_0, ucm_fdi_ilsa_client_CreateJSONObject_createGramatica__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(JSOSucion, $intern_65).isArray__Lcom_google_gwt_json_client_JSONArray_2())) , ucm_fdi_ilsa_client_CreateJSONObject_create__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentCompleteJSON_2_DocumentoJ_0);
  SS = null;
  for (Gr$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Documento.fdi_ucm_server_interconect_model_DocumentCompleteJSON_Gramaticas); Gr$iterator.java_util_AbstractList$IteratorImpl_i < Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
    Gr = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(Gr$iterator.java_util_AbstractList$IteratorImpl_i < Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(Gr$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(Gr$iterator.java_util_AbstractList$IteratorImpl_last = Gr$iterator.java_util_AbstractList$IteratorImpl_i++), 56));
    SS = ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$gotContext__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Ljava_util_List_2Ljava_lang_Long_2Lfdi_ucm_server_interconect_model_StructureJSON_2(this, Gr.fdi_ucm_server_interconect_model_GrammarJSON_ListaS, this.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_ContextId);
    if (SS)
      break;
  }
  if (!SS) {
    T4 = new com_google_gwt_user_client_ui_Label_Label__V;
    com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(T4.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, 'Context not found');
    com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(VP, T4);
  }
   else {
    ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V('1:' + SS.fdi_ucm_server_interconect_model_StructureJSON_Name);
    Errores = ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$test__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_List_2(this, SS);
    if (Errores.java_util_ArrayList_array.length == 0) {
      ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$CreaLosPaneles__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2V(this);
    }
     else {
      T4 = new com_google_gwt_user_client_ui_Label_Label__V;
      com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(T4.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, 'Context not match with requiered structure');
      com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(VP, T4);
      for (string$iterator = new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(Errores); string$iterator.java_util_AbstractList$IteratorImpl_i < string$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I();) {
        string = (com_google_gwt_core_shared_impl_InternalPreconditions_checkCriticalElement__ZV(string$iterator.java_util_AbstractList$IteratorImpl_i < string$iterator.java_util_AbstractList$IteratorImpl_this$01.size__I()) , com_google_gwt_lang_Cast_dynamicCastToString__Ljava_lang_Object_2Ljava_lang_Object_2(string$iterator.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(string$iterator.java_util_AbstractList$IteratorImpl_last = string$iterator.java_util_AbstractList$IteratorImpl_i++)));
        T5 = new com_google_gwt_user_client_ui_Label_Label__V;
        com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(T5.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, string);
        com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(VP, T5);
      }
    }
  }
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_console__Ljava_lang_String_2V(text_0){
  console.log(text_0);
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_getVariableBaseJSONOBJS__Ljava_lang_String_2Ljava_lang_String_2(documentID2){
  $wnd.daletmp = '$wnd.dale = $wnd.JSDocExpand' + documentID2;
  eval($wnd.daletmp);
  return $wnd.dale;
}

function ucm_fdi_ilsa_client_CompositeDocumentEditionProto_setVariableBase3__Ljava_lang_String_2Ljava_lang_String_2V(DocumentoExpandido, idrandomdoct){
  $wnd.tmp = DocumentoExpandido;
  $wnd.str = '$wnd.JSDocExpand' + idrandomdoct + ' = $wnd.tmp';
  console.log($wnd.str);
  eval($wnd.str);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(94, 1, {}, ucm_fdi_ilsa_client_CompositeDocumentEditionProto_CompositeDocumentEditionProto__Ljava_lang_String_2Ljava_lang_Long_2IZV);
_.ucm_fdi_ilsa_client_CompositeDocumentEditionProto_Width = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lucm_1fdi_1ilsa_1client_1CompositeDocumentEditionProto_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'CompositeDocumentEditionProto', 94);
function ucm_fdi_ilsa_client_CompositeDocumentDescriptionProto_CompositeDocumentDescriptionProto__Ljava_lang_String_2Ljava_lang_Long_2IZZZV(randomIdVars, contextId){
  ucm_fdi_ilsa_client_CompositeDocumentEditionProto_CompositeDocumentEditionProto__Ljava_lang_String_2Ljava_lang_Long_2IZV.call(this, randomIdVars, contextId);
}

com_google_gwt_lang_JavaClassHierarchySetupUtil_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(151, 94, {}, ucm_fdi_ilsa_client_CompositeDocumentDescriptionProto_CompositeDocumentDescriptionProto__Ljava_lang_String_2Ljava_lang_Long_2IZZZV);
var com_google_gwt_lang_ClassLiteralHolder_Lucm_1fdi_1ilsa_1client_1CompositeDocumentDescriptionProto_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_68, 'CompositeDocumentDescriptionProto', 151);
function ucm_fdi_ilsa_client_CreateJSONObject_CreateDocIn__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Lcom_google_gwt_json_client_JSONValue_2(documento2){
  var DocumentoJI;
  DocumentoJI = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_69, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_Id.java_lang_Long_value)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_70, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_Coleccion.java_lang_Long_value)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_71, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_Description));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'IconPath', new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_IconPath));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'QRPath', new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_QRPath));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_72, ucm_fdi_ilsa_client_CreateJSONObject_CreateUserDoc__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONArray_2(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_UserDocument));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_73, ucm_fdi_ilsa_client_CreateJSONObject_CreateOperationalValues__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONArray_2(documento2.fdi_ucm_server_interconect_model_DocumentsJSON_OperationalValues));
  return DocumentoJI;
}

function ucm_fdi_ilsa_client_CreateJSONObject_CreateGramIn__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONValue_2(gramatica){
  var GramarIn, i;
  GramarIn = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  for (i = 0; i < gramatica.java_util_ArrayList_array.length; i++) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(GramarIn, i, ucm_fdi_ilsa_client_CreateJSONObject_grammarInUni__Lfdi_ucm_server_interconect_model_GrammarJSON_2Lcom_google_gwt_json_client_JSONValue_2((com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, gramatica.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(gramatica.java_util_ArrayList_array[i], 56))));
  }
  return GramarIn;
}

function ucm_fdi_ilsa_client_CreateJSONObject_CreateIds__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONValue_2(id_0){
  var UserDoc, i;
  UserDoc = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  for (i = 0; i < id_0.java_util_ArrayList_array.length; i++) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(UserDoc, i, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D((com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, id_0.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(id_0.java_util_ArrayList_array[i], 31)).java_lang_Long_value)));
  }
  return UserDoc;
}

function ucm_fdi_ilsa_client_CreateJSONObject_CreateListStruc__Ljava_util_List_2Lcom_google_gwt_json_client_JSONValue_2(listaS){
  var UserDoc, i;
  UserDoc = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  for (i = 0; i < listaS.java_util_ArrayList_array.length; i++) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(UserDoc, i, ucm_fdi_ilsa_client_CreateJSONObject_createStruct__Lfdi_ucm_server_interconect_model_StructureJSON_2Lcom_google_gwt_json_client_JSONValue_2((com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, listaS.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(listaS.java_util_ArrayList_array[i], 13))));
  }
  return UserDoc;
}

function ucm_fdi_ilsa_client_CreateJSONObject_CreateOperationalValues__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONArray_2(operationalValues){
  var UserDoc, i;
  UserDoc = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  for (i = 0; i < operationalValues.java_util_ArrayList_array.length; i++) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(UserDoc, i, ucm_fdi_ilsa_client_CreateJSONObject_createOperational__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Lcom_google_gwt_json_client_JSONValue_2((com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, operationalValues.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(operationalValues.java_util_ArrayList_array[i], 82))));
  }
  return UserDoc;
}

function ucm_fdi_ilsa_client_CreateJSONObject_CreateOperationalValuesTy__Ljava_util_List_2Lcom_google_gwt_json_client_JSONValue_2(operational){
  var UserDoc, i;
  UserDoc = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  for (i = 0; i < operational.java_util_ArrayList_array.length; i++) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(UserDoc, i, ucm_fdi_ilsa_client_CreateJSONObject_createOperationalTy__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Lcom_google_gwt_json_client_JSONValue_2((com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, operational.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(operational.java_util_ArrayList_array[i], 40))));
  }
  return UserDoc;
}

function ucm_fdi_ilsa_client_CreateJSONObject_CreateUserDoc__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONArray_2(userDocument){
  var UserDoc, i;
  UserDoc = new com_google_gwt_json_client_JSONArray_JSONArray__V;
  for (i = 0; i < userDocument.java_util_ArrayList_array.length; i++) {
    com_google_gwt_json_client_JSONArray_$set__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(UserDoc, i, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D((com_google_gwt_core_shared_impl_InternalPreconditions_checkElementIndex__IIV(i, userDocument.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(userDocument.java_util_ArrayList_array[i], 31)).java_lang_Long_value)));
  }
  return UserDoc;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createDocument__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_DocumentsJSON_2(jsonValue){
  var D;
  D = new fdi_ucm_server_interconect_model_DocumentsJSON_DocumentsJSON__V;
  fdi_ucm_server_interconect_model_DocumentsJSON_$setId__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_Long_2V(D, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, $intern_69).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  fdi_ucm_server_interconect_model_DocumentsJSON_$setColeccion__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_Long_2V(D, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, $intern_70).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  fdi_ucm_server_interconect_model_DocumentsJSON_$setDescription__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_String_2V(D, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, $intern_71).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_DocumentsJSON_$setIconPath__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_String_2V(D, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, 'IconPath').isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_DocumentsJSON_$setQRPath__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_lang_String_2V(D, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, 'QRPath').isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_DocumentsJSON_$setUserDocument__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_util_ArrayList_2V(D, ucm_fdi_ilsa_client_CreateJSONObject_createUsersID__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, $intern_72).isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_DocumentsJSON_$setOperationalValues__Lfdi_ucm_server_interconect_model_DocumentsJSON_2Ljava_util_ArrayList_2V(D, ucm_fdi_ilsa_client_CreateJSONObject_createOperaValue__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(jsonValue, $intern_73).isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  return D;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createGramarUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_GrammarJSON_2(object){
  var Salida;
  Salida = new fdi_ucm_server_interconect_model_GrammarJSON_GrammarJSON__V;
  fdi_ucm_server_interconect_model_GrammarJSON_$setId__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_Long_2V(Salida, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_69).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  fdi_ucm_server_interconect_model_GrammarJSON_$setColeccion__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_Long_2V(Salida, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_70).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  fdi_ucm_server_interconect_model_GrammarJSON_$setDescription__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_String_2V(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_71).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_GrammarJSON_$setName__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_lang_String_2V(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_74).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_GrammarJSON_$setListaS__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_util_List_2V(Salida, ucm_fdi_ilsa_client_CreateJSONObject_createStrList__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_List_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'ListaS').isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_GrammarJSON_$setOperational__Lfdi_ucm_server_interconect_model_GrammarJSON_2Ljava_util_List_2V(Salida, ucm_fdi_ilsa_client_CreateJSONObject_createOperaValueTy__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_75).isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  return Salida;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createGramatica__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(array){
  var Lista, i;
  Lista = new java_util_ArrayList_ArrayList__V;
  for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; i++)
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(Lista, ucm_fdi_ilsa_client_CreateJSONObject_createGramarUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_GrammarJSON_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i).isObject__Lcom_google_gwt_json_client_JSONObject_2()));
  return Lista;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createIds__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(array){
  var Salida, i;
  Salida = new java_util_ArrayList_ArrayList__V;
  for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; i++)
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(Salida, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  return Salida;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createOperaTyUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2(object){
  var OPJ;
  OPJ = new fdi_ucm_server_interconect_model_OperationalValueTypeJSON_OperationalValueTypeJSON__V;
  fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setId__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_util_ArrayList_2V(OPJ, ucm_fdi_ilsa_client_CreateJSONObject_createIds__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_69).isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setDefault__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_lang_String_2V(OPJ, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'Default').isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setName__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_lang_String_2V(OPJ, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_74).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  fdi_ucm_server_interconect_model_OperationalValueTypeJSON_$setView__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Ljava_lang_String_2V(OPJ, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'View').isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  return OPJ;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createOperaUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_OperationalValueJSON_2(object){
  var OPJ;
  OPJ = new fdi_ucm_server_interconect_model_OperationalValueJSON_OperationalValueJSON__V;
  fdi_ucm_server_interconect_model_OperationalValueJSON_$setId__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Ljava_lang_Long_2V(OPJ, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_69).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  fdi_ucm_server_interconect_model_OperationalValueJSON_$setOperationalValueTypeId__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Ljava_lang_Long_2V(OPJ, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_76).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  fdi_ucm_server_interconect_model_OperationalValueJSON_$setValue__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Ljava_lang_String_2V(OPJ, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_77).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  return OPJ;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createOperaValue__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(array){
  var Lista, i;
  Lista = new java_util_ArrayList_ArrayList__V;
  for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; i++)
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(Lista, ucm_fdi_ilsa_client_CreateJSONObject_createOperaUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_OperationalValueJSON_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i).isObject__Lcom_google_gwt_json_client_JSONObject_2()));
  return Lista;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createOperaValueTy__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(array){
  var Lista, i;
  Lista = new java_util_ArrayList_ArrayList__V;
  for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; i++)
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(Lista, ucm_fdi_ilsa_client_CreateJSONObject_createOperaTyUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i).isObject__Lcom_google_gwt_json_client_JSONObject_2()));
  return Lista;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createOperational__Lfdi_ucm_server_interconect_model_OperationalValueJSON_2Lcom_google_gwt_json_client_JSONValue_2(operationalValueJSON){
  var DocumentoJI;
  DocumentoJI = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_69, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(operationalValueJSON.fdi_ucm_server_interconect_model_OperationalValueJSON_Id.java_lang_Long_value)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_76, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(operationalValueJSON.fdi_ucm_server_interconect_model_OperationalValueJSON_OperationalValueTypeId.java_lang_Long_value)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_77, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(operationalValueJSON.fdi_ucm_server_interconect_model_OperationalValueJSON_Value));
  return DocumentoJI;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createOperationalTy__Lfdi_ucm_server_interconect_model_OperationalValueTypeJSON_2Lcom_google_gwt_json_client_JSONValue_2(operationalValueTypeJSON){
  var DocumentoJI;
  DocumentoJI = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_69, ucm_fdi_ilsa_client_CreateJSONObject_CreateIds__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONValue_2(operationalValueTypeJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Id));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_74, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(operationalValueTypeJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Name));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'View', new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(operationalValueTypeJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_View));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'Default', new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(operationalValueTypeJSON.fdi_ucm_server_interconect_model_OperationalValueTypeJSON_Default));
  return DocumentoJI;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createStrList__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_List_2(array){
  var Lista, i;
  Lista = new java_util_ArrayList_ArrayList__V;
  for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; i++)
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(Lista, ucm_fdi_ilsa_client_CreateJSONObject_createStrUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_StructureJSON_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i).isObject__Lcom_google_gwt_json_client_JSONObject_2()));
  return Lista;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createStrUni__Lcom_google_gwt_json_client_JSONObject_2Lfdi_ucm_server_interconect_model_StructureJSON_2(object){
  var ElementId, Father, Salida, TypeOfStructure, TypeOfStructureT, Value, ValueU;
  Salida = new fdi_ucm_server_interconect_model_StructureJSON_StructureJSON__V;
  fdi_ucm_server_interconect_model_StructureJSON_$setId__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_ArrayList_2V(Salida, ucm_fdi_ilsa_client_CreateJSONObject_createIds__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_69).isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_StructureJSON_$setClaseOf__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_Long_2V(Salida, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'ClaseOf').isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  ElementId = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_78);
  ElementId.isNumber__Lcom_google_gwt_json_client_JSONNumber_2()?fdi_ucm_server_interconect_model_StructureJSON_$setElementId__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_Long_2V(Salida, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(ElementId.isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value))):(Salida.fdi_ucm_server_interconect_model_StructureJSON_ElementId = null);
  Father = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_79);
  Father.isNumber__Lcom_google_gwt_json_client_JSONNumber_2()?fdi_ucm_server_interconect_model_StructureJSON_$setFather__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_Long_2V(Salida, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(Father.isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value))):(Salida.fdi_ucm_server_interconect_model_StructureJSON_Father = null);
  fdi_ucm_server_interconect_model_StructureJSON_$setName__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_String_2V(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_74).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value);
  Value = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_77);
  Value.isString__Lcom_google_gwt_json_client_JSONString_2()?fdi_ucm_server_interconect_model_StructureJSON_$setValue__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_String_2V(Salida, Value.isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value):(Salida.fdi_ucm_server_interconect_model_StructureJSON_Value = '');
  ValueU = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_80);
  ValueU.isString__Lcom_google_gwt_json_client_JSONString_2()?fdi_ucm_server_interconect_model_StructureJSON_$setURLValue__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_lang_String_2V(Salida, ValueU.isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value):(Salida.fdi_ucm_server_interconect_model_StructureJSON_URLValue = '');
  TypeOfStructure = com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_81).isString__Lcom_google_gwt_json_client_JSONString_2().com_google_gwt_json_client_JSONString_value;
  try {
    TypeOfStructureT = (fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V() , com_google_gwt_lang_Cast_dynamicCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_lang_Enum_valueOf__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2Ljava_lang_Enum_2((fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum$Map_$clinit__V() , fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum$Map_$MAP), TypeOfStructure), 45));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_wrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 7)) {
      TypeOfStructureT = (fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_$clinit__V() , fdi_ucm_server_interconect_model_StructureJSON$TypeOfStructureEnum_Basic);
    }
     else 
      throw com_google_gwt_lang_Exceptions_unwrap__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  Salida.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure = TypeOfStructureT;
  fdi_ucm_server_interconect_model_StructureJSON_$setOperationalValues__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_ArrayList_2V(Salida, ucm_fdi_ilsa_client_CreateJSONObject_createOperaValue__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_73).isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_StructureJSON_$setShows__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_ArrayList_2V(Salida, ucm_fdi_ilsa_client_CreateJSONObject_createOperaValueTy__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'Shows').isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_StructureJSON_$setSons__Lfdi_ucm_server_interconect_model_StructureJSON_2Ljava_util_List_2V(Salida, ucm_fdi_ilsa_client_CreateJSONObject_createStrList__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_List_2(com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'Sons').isArray__Lcom_google_gwt_json_client_JSONArray_2()));
  fdi_ucm_server_interconect_model_StructureJSON_$setMultivalued__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_82).isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2().com_google_gwt_json_client_JSONBoolean_value);
  fdi_ucm_server_interconect_model_StructureJSON_$setBrowseable__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_83).isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2().com_google_gwt_json_client_JSONBoolean_value);
  fdi_ucm_server_interconect_model_StructureJSON_$setSelected__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'Selected').isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2().com_google_gwt_json_client_JSONBoolean_value);
  fdi_ucm_server_interconect_model_StructureJSON_$setExtended__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'Extended').isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2().com_google_gwt_json_client_JSONBoolean_value);
  fdi_ucm_server_interconect_model_StructureJSON_$setFiltro__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'Filtro').isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2().com_google_gwt_json_client_JSONBoolean_value);
  fdi_ucm_server_interconect_model_StructureJSON_$setSelectedValue__Lfdi_ucm_server_interconect_model_StructureJSON_2ZV(Salida, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, $intern_84).isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2().com_google_gwt_json_client_JSONBoolean_value);
  return Salida;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createStruct__Lfdi_ucm_server_interconect_model_StructureJSON_2Lcom_google_gwt_json_client_JSONValue_2(structureJSON){
  var DocumentoJI;
  DocumentoJI = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_69, ucm_fdi_ilsa_client_CreateJSONObject_CreateIds__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONValue_2(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Id));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'ClaseOf', new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_ClaseOf.java_lang_Long_value)));
  structureJSON.fdi_ucm_server_interconect_model_StructureJSON_ElementId?com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_78, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_ElementId.java_lang_Long_value))):com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_78, (com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance));
  structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Father?com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_79, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Father.java_lang_Long_value))):com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_79, (com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'Sons', ucm_fdi_ilsa_client_CreateJSONObject_CreateListStruc__Ljava_util_List_2Lcom_google_gwt_json_client_JSONValue_2(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Sons));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_73, ucm_fdi_ilsa_client_CreateJSONObject_CreateOperationalValues__Ljava_util_ArrayList_2Lcom_google_gwt_json_client_JSONArray_2(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_OperationalValues));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'Shows', ucm_fdi_ilsa_client_CreateJSONObject_CreateOperationalValuesTy__Ljava_util_List_2Lcom_google_gwt_json_client_JSONValue_2(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Shows));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_81, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(java_lang_Enum_$name__Ljava_lang_Enum_2Ljava_lang_String_2(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_TypeOfStructure)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_82, (com_google_gwt_json_client_JSONBoolean_$clinit__V() , structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Multivalued?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_83, structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Browseable?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE);
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'Selected', structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Selected?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE);
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'Extended', structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Extended?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE);
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'Filtro', structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Filtro?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE);
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_84, structureJSON.fdi_ucm_server_interconect_model_StructureJSON_SelectedValue?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE);
  structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Value != null?com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_77, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Value)):com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_77, (com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance));
  structureJSON.fdi_ucm_server_interconect_model_StructureJSON_URLValue != null?com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_80, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_URLValue)):com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_80, (com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_74, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(structureJSON.fdi_ucm_server_interconect_model_StructureJSON_Name));
  return DocumentoJI;
}

function ucm_fdi_ilsa_client_CreateJSONObject_createUsersID__Lcom_google_gwt_json_client_JSONArray_2Ljava_util_ArrayList_2(array){
  var Lista, i;
  Lista = new java_util_ArrayList_ArrayList__V;
  for (i = 0; i < array.com_google_gwt_json_client_JSONArray_jsArray.length; i++)
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(Lista, java_lang_Long_valueOf__JLjava_lang_Long_2(com_google_gwt_lang_LongLib_fromDouble__DLcom_google_gwt_lang_LongLibBase$LongEmul_2((new java_lang_Double_Double__DV(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i).isNumber__Lcom_google_gwt_json_client_JSONNumber_2().com_google_gwt_json_client_JSONNumber_value)).java_lang_Double_value)));
  return Lista;
}

function ucm_fdi_ilsa_client_CreateJSONObject_grammarInUni__Lfdi_ucm_server_interconect_model_GrammarJSON_2Lcom_google_gwt_json_client_JSONValue_2(grammarJSON){
  var DocumentoJI;
  DocumentoJI = new com_google_gwt_json_client_JSONObject_JSONObject__V;
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_69, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(grammarJSON.fdi_ucm_server_interconect_model_GrammarJSON_Id.java_lang_Long_value)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_70, new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(com_google_gwt_lang_LongLib_toDouble__Lcom_google_gwt_lang_LongLibBase$LongEmul_2D(grammarJSON.fdi_ucm_server_interconect_model_GrammarJSON_Coleccion.java_lang_Long_value)));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_71, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(grammarJSON.fdi_ucm_server_interconect_model_GrammarJSON_Description));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_74, new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(grammarJSON.fdi_ucm_server_interconect_model_GrammarJSON_Name));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, 'ListaS', ucm_fdi_ilsa_client_CreateJSONObject_CreateListStruc__Ljava_util_List_2Lcom_google_gwt_json_client_JSONValue_2(grammarJSON.fdi_ucm_server_interconect_model_GrammarJSON_ListaS));
  com_google_gwt_json_client_JSONObject_$put__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONValue_2(DocumentoJI, $intern_75, ucm_fdi_ilsa_client_CreateJSONObject_CreateOperationalValuesTy__Ljava_util_List_2Lcom_google_gwt_json_client_JSONValue_2(grammarJSON.fdi_ucm_server_interconect_model_GrammarJSON_Operational));
  return DocumentoJI;
}

function ucm_fdi_ilsa_client_GWTExternalProto_$clinit__V(){
  ucm_fdi_ilsa_client_GWTExternalProto_$clinit__V = com_google_gwt_lang_JavaClassHierarchySetupUtil_emptyMethod__V;
  $wnd.ProtoSetContext = ucm_fdi_ilsa_client_GWTExternalProto_setContext__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZV;
  $wnd.ProtoGetIcon = ucm_fdi_ilsa_client_GWTExternalProto_getIcon__Ljava_lang_String_2;
  $wnd.ProtoPersist = ucm_fdi_ilsa_client_GWTExternalProto_getPersist__V;
  $wnd.ProtoisWaitingUpdate = ucm_fdi_ilsa_client_GWTExternalProto_isWaitingUpdate__Z;
  $wnd.ProtoupdateContext = ucm_fdi_ilsa_client_GWTExternalProto_updateContext__Z;
  $wnd.ProtosetWaitingUpdate = ucm_fdi_ilsa_client_GWTExternalProto_setWaitingUpdate__ZV;
}

function ucm_fdi_ilsa_client_GWTExternalProto_getIcon__Ljava_lang_String_2(){
  return 'proto.png';
}

function ucm_fdi_ilsa_client_GWTExternalProto_getPersist__V(){
  !!ucm_fdi_ilsa_client_GWTExternalProto_Actual && ucm_fdi_ilsa_client_CompositeDocumentEditionProto_$persistJS__Lucm_fdi_ilsa_client_CompositeDocumentEditionProto_2V(ucm_fdi_ilsa_client_GWTExternalProto_Actual);
}

function ucm_fdi_ilsa_client_GWTExternalProto_isWaitingUpdate__Z(){
  return false;
}

function ucm_fdi_ilsa_client_GWTExternalProto_setContext__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ZZZZV(IdVentana, contextId, Height, isgrammar, edit, views, CompleteView){
  var contLong;
  contLong = java_lang_Long_valueOf__JLjava_lang_Long_2(java_lang_Number__1_1parseAndValidateLong__Ljava_lang_String_2IJ(contextId));
  java_lang_Integer_valueOf__ILjava_lang_Integer_2(java_lang_Number__1_1parseAndValidateInt__Ljava_lang_String_2IIII(Height));
  edit?(ucm_fdi_ilsa_client_GWTExternalProto_Actual = new ucm_fdi_ilsa_client_CompositeDocumentEditionProto_CompositeDocumentEditionProto__Ljava_lang_String_2Ljava_lang_Long_2IZV(IdVentana, contLong)):(ucm_fdi_ilsa_client_GWTExternalProto_Actual = new ucm_fdi_ilsa_client_CompositeDocumentDescriptionProto_CompositeDocumentDescriptionProto__Ljava_lang_String_2Ljava_lang_Long_2IZZZV(IdVentana, contLong));
}

function ucm_fdi_ilsa_client_GWTExternalProto_setWaitingUpdate__ZV(update){
}

function ucm_fdi_ilsa_client_GWTExternalProto_updateContext__Z(){
  return true;
}

var ucm_fdi_ilsa_client_GWTExternalProto_Actual;
var com_google_gwt_lang_ClassLiteralHolder_I_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('int', 'I'), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1CollapsedPropertyHolder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_85, 'CollapsedPropertyHolder', 223), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1JavaClassHierarchySetupUtil_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_85, 'JavaClassHierarchySetupUtil', 225), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1LongLibBase$LongEmul_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_85, 'LongLibBase/LongEmul', null), com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1lang_1ModuleUtils_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_85, 'ModuleUtils', 228), com_google_gwt_lang_ClassLiteralHolder_J_1classLit = java_lang_Class_createForPrimitive__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('long', 'J'), com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Map$Entry_12_1classLit = java_lang_Class_createForInterface__Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_Class_2($intern_61, 'Map/Entry');
var $entry = com_google_gwt_lang_ModuleUtils_registerEntry__Lcom_google_gwt_core_client_JavaScriptObject_2();
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_ucm_100046fdi_100046ilsa_100046GWTExternalDummy_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', 'ie10']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=gwtexternalproto-0.js

