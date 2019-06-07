package ucm.fdi.ilsa.client;

import java.io.Serializable;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

import com.google.gwt.user.client.rpc.IsSerializable;

public class TermProcesado implements Serializable,IsSerializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String Term;
	private List<String> Semantica;
	private HashSet<Integer> Posiciones;
	private String CUI;
	
	public TermProcesado() {
		Term="";
		CUI="";
		Semantica=new LinkedList<String>();
		Posiciones=new HashSet<Integer>();
	}


	public String getTerm() {
		return Term;
	}


	public void setTerm(String term) {
		Term = term;
	}



	public HashSet<Integer> getPosiciones() {
		return Posiciones;
	}


	public void setPosiciones(HashSet<Integer> posiciones) {
		Posiciones = posiciones;
	}


	public TermProcesado(String term, HashSet<Integer> posiciones) {
		super();
		Term = term;
		Semantica=new LinkedList<String>();
		Posiciones = posiciones;
	}
	
	public List<String> getSemantica() {
		return Semantica;
	}
	
	public void setSemantica(List<String> semantica) {
		Semantica = semantica;
	}
	
	public String getCUI() {
		return CUI;
	}
	
	public void setCUI(String cUI) {
		CUI = cUI;
	}
	
	@Override
	public boolean equals(Object obj) {
//		if (!(obj instanceof TermProcesado))
//			return false;
//		else
//			if (super.equals(obj))
//				return true;
//			else
				return Term.equals(((TermProcesado)obj).getTerm());
			
		
	}
	
	@Override
	public String toString() {
		return Term;
	}
	
}
