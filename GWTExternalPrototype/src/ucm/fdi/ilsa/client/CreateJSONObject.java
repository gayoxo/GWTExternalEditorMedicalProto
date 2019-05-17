/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.shared.GWT;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONBoolean;
import com.google.gwt.json.client.JSONNull;
import com.google.gwt.json.client.JSONNumber;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;

import fdi.ucm.server.interconect.model.DocumentCompleteJSON;
import fdi.ucm.server.interconect.model.DocumentsJSON;
import fdi.ucm.server.interconect.model.GrammarJSON;
import fdi.ucm.server.interconect.model.OperationalValueJSON;
import fdi.ucm.server.interconect.model.OperationalValueTypeJSON;
import fdi.ucm.server.interconect.model.StructureJSON;
import fdi.ucm.server.interconect.model.StructureJSON.TypeOfStructureEnum;

/**
 * @author Joaquin Gayoso
 *
 */
public class CreateJSONObject {
	
	
	public static JSONObject create(DocumentCompleteJSON documento2) {
		JSONObject DocumentoJ=new JSONObject();
		DocumentoJ.put("Documento", CreateDocIn(documento2.getDocumento()));
		DocumentoJ.put("Gramaticas", CreateGramIn(documento2.getGramatica()));
		return DocumentoJ;
	}

	public static DocumentCompleteJSON create(JSONObject documento2) {
		DocumentCompleteJSON DocumentoJ=new DocumentCompleteJSON();
		DocumentoJ.setDocumento(createDocument(documento2.get("Documento").isObject()));
		DocumentoJ.setGramatica(createGramatica(documento2.get("Gramaticas").isArray()));
		return DocumentoJ;
	}
	
	
	private static ArrayList<GrammarJSON> createGramatica(JSONArray array) {
		ArrayList<GrammarJSON> Lista=new ArrayList<GrammarJSON>();
		for (int i = 0; i < array.size(); i++) 
			Lista.add(createGramarUni(array.get(i).isObject()));

		return Lista;
	}

	private static GrammarJSON createGramarUni(JSONObject object) {
		GrammarJSON Salida= new GrammarJSON();
		Salida.setId(new Double(object.get("Id").isNumber().doubleValue()).longValue());
		Salida.setColeccion(new Double(object.get("Coleccion").isNumber().doubleValue()).longValue());
		Salida.setDescription(object.get("Description").isString().stringValue());
		Salida.setName(object.get("Name").isString().stringValue());
		Salida.setListaS(createStrList(object.get("ListaS").isArray()));
		Salida.setOperational(createOperaValueTy(object.get("Operational").isArray()));
		return Salida;
	}



	private static List<StructureJSON> createStrList(JSONArray array) {
		ArrayList<StructureJSON> Lista=new ArrayList<StructureJSON>();
		for (int i = 0; i < array.size(); i++) 
			Lista.add(createStrUni(array.get(i).isObject()));

		return Lista;
	}

	private static StructureJSON createStrUni(JSONObject object) {
		StructureJSON Salida=new StructureJSON();
		Salida.setId(createIds(object.get("Id").isArray()));
		Salida.setClaseOf(new Double(object.get("ClaseOf").isNumber().doubleValue()).longValue());
		
		JSONValue ElementId = object.get("ElementId");
		if (ElementId.isNumber()!=null)
			Salida.setElementId(new Double(ElementId.isNumber().doubleValue()).longValue());
		else
			Salida.setElementId(null);
		
		JSONValue Father = object.get("Father");
		if (Father.isNumber()!=null)
			Salida.setFather(new Double(Father.isNumber().doubleValue()).longValue());
		else
			Salida.setFather(null);
		
		
		Salida.setName(object.get("Name").isString().stringValue());
		
		JSONValue Value = object.get("Value");
		if (Value.isString()!=null)
			Salida.setValue(Value.isString().stringValue());
		else
			Salida.setValue("");
		
		JSONValue ValueU = object.get("URLValue");
		if (ValueU.isString()!=null)
			Salida.setURLValue(ValueU.isString().stringValue());
		else
			Salida.setURLValue("");
		
		
		String TypeOfStructure = object.get("TypeOfStructure").isString().stringValue();
		TypeOfStructureEnum TypeOfStructureT=null;
		try {
			TypeOfStructureT=TypeOfStructureEnum.valueOf(TypeOfStructure);
		} catch (Exception e) {
			GWT.log("Error en procesar->"+TypeOfStructure);
			TypeOfStructureT=TypeOfStructureEnum.Basic;
		}
		
		Salida.setTypeOfStructure(TypeOfStructureT);
		Salida.setOperationalValues(createOperaValue(object.get("OperationalValues").isArray()));
		Salida.setShows(createOperaValueTy(object.get("Shows").isArray()));
		
		Salida.setSons(createStrList(object.get("Sons").isArray()));
		
		Salida.setMultivalued(object.get("Multivalued").isBoolean().booleanValue());
		Salida.setBrowseable(object.get("Browseable").isBoolean().booleanValue());
		Salida.setSelected(object.get("Selected").isBoolean().booleanValue());
		Salida.setExtended(object.get("Extended").isBoolean().booleanValue());
		Salida.setFiltro(object.get("Filtro").isBoolean().booleanValue());
		Salida.setSelectedValue(object.get("SelectedValue").isBoolean().booleanValue());
		
		
		
		return Salida;
	}

	private static ArrayList<OperationalValueTypeJSON> createOperaValueTy(JSONArray array) {
		ArrayList<OperationalValueTypeJSON> Lista=new ArrayList<OperationalValueTypeJSON>();
		for (int i = 0; i < array.size(); i++) 
			Lista.add(createOperaTyUni(array.get(i).isObject()));

		return Lista;
	}

	private static OperationalValueTypeJSON createOperaTyUni(JSONObject object) {
		OperationalValueTypeJSON OPJ=new OperationalValueTypeJSON();
		OPJ.setId(createIds(object.get("Id").isArray()));
		OPJ.setDefault(object.get("Default").isString().stringValue());
		OPJ.setName(object.get("Name").isString().stringValue());
		OPJ.setView(object.get("View").isString().stringValue());
		return OPJ;
	}

	private static ArrayList<Long> createIds(JSONArray array) {
		ArrayList<Long> Salida = new ArrayList<Long>();
		for (int i = 0; i < array.size(); i++) 
			Salida.add(new Double(array.get(i).isNumber().doubleValue()).longValue());
		
		return Salida;
	}

	private static DocumentsJSON createDocument(JSONObject jsonValue) {
		DocumentsJSON D= new DocumentsJSON();
		D.setId(new Double(jsonValue.get("Id").isNumber().doubleValue()).longValue());
		D.setColeccion(new Double(jsonValue.get("Coleccion").isNumber().doubleValue()).longValue());
		D.setDescription(jsonValue.get("Description").isString().stringValue());
		D.setIconPath(jsonValue.get("IconPath").isString().stringValue());
		D.setQRPath(jsonValue.get("QRPath").isString().stringValue());
		D.setUserDocument(createUsersID(jsonValue.get("UserDocument").isArray()));
		D.setOperationalValues(createOperaValue(jsonValue.get("OperationalValues").isArray()));
		return D;
	}


	



	private static ArrayList<OperationalValueJSON> createOperaValue(JSONArray array) {
		ArrayList<OperationalValueJSON> Lista=new ArrayList<OperationalValueJSON>();
		for (int i = 0; i < array.size(); i++) 
			Lista.add(createOperaUni(array.get(i).isObject()));

		return Lista;
	}

	private static OperationalValueJSON createOperaUni(JSONObject object) {
		OperationalValueJSON OPJ=new OperationalValueJSON();
		OPJ.setId(new Double(object.get("Id").isNumber().doubleValue()).longValue());
		OPJ.setOperationalValueTypeId(new Double(object.get("OperationalValueTypeId").isNumber().doubleValue()).longValue());
		OPJ.setValue(object.get("Value").isString().stringValue());
		return OPJ;
	}

	private static ArrayList<Long> createUsersID(JSONArray array) {
		ArrayList<Long> Lista=new ArrayList<Long>();
		for (int i = 0; i < array.size(); i++) 
			Lista.add(new Double(array.get(i).isNumber().doubleValue()).longValue());

		return Lista;
	}

	private static JSONValue CreateGramIn(ArrayList<GrammarJSON> gramatica) {
		JSONArray GramarIn=new JSONArray();
		for (int i = 0; i < gramatica.size(); i++) {
			GramarIn.set(i, grammarInUni(gramatica.get(i)));
		}
		return GramarIn;
	}







	private static JSONValue grammarInUni(GrammarJSON grammarJSON) {
		JSONObject DocumentoJI=new JSONObject();
		DocumentoJI.put("Id", new JSONNumber(grammarJSON.getId()));
		DocumentoJI.put("Coleccion", new JSONNumber(grammarJSON.getColeccion()));
		DocumentoJI.put("Description", new JSONString(grammarJSON.getDescription()));
		DocumentoJI.put("Name", new JSONString(grammarJSON.getName()));
		DocumentoJI.put("ListaS", CreateListStruc(grammarJSON.getListaS()));
		DocumentoJI.put("Operational", CreateOperationalValuesTy(grammarJSON.getOperational()));
		return DocumentoJI;
	}







	private static JSONValue CreateOperationalValuesTy(List<OperationalValueTypeJSON> operational) {
		JSONArray UserDoc=new JSONArray();
		for (int i = 0; i < operational.size(); i++) {
			UserDoc.set(i, createOperationalTy(operational.get(i)));
		}

		return UserDoc;
	}







	private static JSONValue createOperationalTy(OperationalValueTypeJSON operationalValueTypeJSON) {
		JSONObject DocumentoJI=new JSONObject();
		DocumentoJI.put("Id", CreateIds(operationalValueTypeJSON.getId()));
		DocumentoJI.put("Name", new JSONString(operationalValueTypeJSON.getName()));
		DocumentoJI.put("View", new JSONString(operationalValueTypeJSON.getView()));
		DocumentoJI.put("Default", new JSONString(operationalValueTypeJSON.getDefault()));
		return DocumentoJI;
	}







	private static JSONValue CreateIds(ArrayList<Long> id) {
		JSONArray UserDoc=new JSONArray();
		for (int i = 0; i < id.size(); i++) {
			UserDoc.set(i, new JSONNumber(id.get(i)));
		}

		return UserDoc;
	}







	private static JSONValue CreateListStruc(List<StructureJSON> listaS) {
		JSONArray UserDoc=new JSONArray();
		for (int i = 0; i < listaS.size(); i++) {
			UserDoc.set(i, createStruct(listaS.get(i)));
		}

		return UserDoc;
	}







	private static JSONValue createStruct(StructureJSON structureJSON) {
		JSONObject DocumentoJI=new JSONObject();
		DocumentoJI.put("Id", CreateIds(structureJSON.getId()));
		DocumentoJI.put("ClaseOf", new JSONNumber(structureJSON.getClaseOf()));
		
		if (structureJSON.getElementId()!=null)
			DocumentoJI.put("ElementId", new JSONNumber(structureJSON.getElementId()));
		else
			DocumentoJI.put("ElementId", JSONNull.getInstance());
		
		if (structureJSON.getFather()!=null)
			DocumentoJI.put("Father", new JSONNumber(structureJSON.getFather()));
		else
			DocumentoJI.put("Father", JSONNull.getInstance());
			
		DocumentoJI.put("Sons", CreateListStruc(structureJSON.getSons()));
		DocumentoJI.put("OperationalValues", CreateOperationalValues(structureJSON.getOperationalValues()));
		DocumentoJI.put("Shows", CreateOperationalValuesTy(structureJSON.getShows()));
		DocumentoJI.put("TypeOfStructure", new JSONString(structureJSON.getTypeOfStructure().name()));
		DocumentoJI.put("Multivalued", JSONBoolean.getInstance(structureJSON.isMultivalued()));
		DocumentoJI.put("Browseable", JSONBoolean.getInstance(structureJSON.isBrowseable()));
		DocumentoJI.put("Selected", JSONBoolean.getInstance(structureJSON.isSelected()));
		DocumentoJI.put("Extended", JSONBoolean.getInstance(structureJSON.isExtended()));
		DocumentoJI.put("Filtro", JSONBoolean.getInstance(structureJSON.isFiltro()));
		DocumentoJI.put("SelectedValue", JSONBoolean.getInstance(structureJSON.isSelectedValue()));
		
		if (structureJSON.getValue()!=null)
			DocumentoJI.put("Value",new JSONString(structureJSON.getValue()));
		else
			DocumentoJI.put("Value", JSONNull.getInstance());
		
		
		if (structureJSON.getURLValue()!=null)
			DocumentoJI.put("URLValue",new JSONString(structureJSON.getURLValue()));
		else
			DocumentoJI.put("URLValue", JSONNull.getInstance());
		
		
		DocumentoJI.put("Name",new JSONString(structureJSON.getName()));
		
		return DocumentoJI;
	}







	private static JSONValue CreateDocIn(DocumentsJSON documento2) {
		JSONObject DocumentoJI=new JSONObject();
		DocumentoJI.put("Id", new JSONNumber(documento2.getId()));
		DocumentoJI.put("Coleccion", new JSONNumber(documento2.getColeccion()));
		DocumentoJI.put("Description", new JSONString(documento2.getDescription()));
		DocumentoJI.put("IconPath", new JSONString(documento2.getIconPath()));
		DocumentoJI.put("QRPath", new JSONString(documento2.getQRPath()));
		DocumentoJI.put("UserDocument", CreateUserDoc(documento2.getUserDocument()));
		DocumentoJI.put("OperationalValues", CreateOperationalValues(documento2.getOperationalValues()));
		return DocumentoJI;
	}







	private static JSONArray CreateOperationalValues(ArrayList<OperationalValueJSON> operationalValues) {
		JSONArray UserDoc=new JSONArray();
		for (int i = 0; i < operationalValues.size(); i++) {
			UserDoc.set(i, createOperational(operationalValues.get(i)));
		}

		return UserDoc;
	}







	private static JSONValue createOperational(OperationalValueJSON operationalValueJSON) {
		JSONObject DocumentoJI=new JSONObject();
		DocumentoJI.put("Id", new JSONNumber(operationalValueJSON.getId()));
		DocumentoJI.put("OperationalValueTypeId", new JSONNumber(operationalValueJSON.getOperationalValueTypeId()));
		DocumentoJI.put("Value", new JSONString(operationalValueJSON.getValue()));
		return DocumentoJI;
	}







	private static JSONArray CreateUserDoc(ArrayList<Long> userDocument) {
		JSONArray UserDoc=new JSONArray();
		for (int i = 0; i < userDocument.size(); i++) {
			UserDoc.set(i, new JSONNumber(userDocument.get(i)));
		}

		return UserDoc;
	}

}
