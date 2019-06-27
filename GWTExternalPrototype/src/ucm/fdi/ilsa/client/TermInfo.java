package ucm.fdi.ilsa.client;

import java.io.Serializable;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import com.google.gwt.user.client.rpc.IsSerializable;

public class TermInfo implements Serializable,IsSerializable {


	private static final long serialVersionUID = 6002205699497183025L;
	private List<String> SemanticTypes;
	private HashMap<String, String> Descripciones;
	
	public TermInfo() {
		SemanticTypes=new LinkedList<String>();
		Descripciones= new HashMap<String, String>();
	}

	public List<String> getSemanticTypes() {
		return SemanticTypes;
	}

	public void setSemanticTypes(List<String> semanticTypes) {
		SemanticTypes = semanticTypes;
	}

	public HashMap<String, String> getDescripciones() {
		return Descripciones;
	}

	public void setDescripciones(HashMap<String, String> descripciones) {
		Descripciones = descripciones;
	}
	
	
	
	
	
}
