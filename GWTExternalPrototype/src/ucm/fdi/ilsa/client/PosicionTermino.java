/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.List;

/**
 * @author Joaquin Gayoso
 *
 */
public class PosicionTermino {

	
	private CompositeDocumentEditionProto Padre;
	private String Valor;
	private List<Integer> PosicionesQueNecesito;
	
	public PosicionTermino(List<Integer> listaPosiciones, CompositeDocumentEditionProto padre, String valor) {
		PosicionesQueNecesito=listaPosiciones;
		Padre=padre;
		Valor=valor;
	}

	
	public CompositeDocumentEditionProto getPadre() {
		return Padre;
	}
	
	public List<Integer> getPosicionesQueNecesito() {
		return PosicionesQueNecesito;
	}
	
	public String getValor() {
		return Valor;
	}
}
