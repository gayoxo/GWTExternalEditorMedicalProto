/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.List;

import fdi.ucm.server.interconect.model.OperationalValueJSON;
import fdi.ucm.server.interconect.model.OperationalValueTypeJSON;
import fdi.ucm.server.interconect.model.StructureJSON;

/**
 * @author Joaquin Gayoso
 *
 */
public class PosicionEspera {

	private List<Integer> PosicionesQueNecesito;
	private CompositeDocumentEditionProto Padre;

	public PosicionEspera(List<Integer> listaPosiciones, CompositeDocumentEditionProto padre) {
	
		PosicionesQueNecesito=listaPosiciones;
		Padre=padre;
	}
	
	

	public CompositeDocumentEditionProto getPadre() {
		return Padre;
	}
	
	public List<Integer> getPosicionesQueNecesito() {
		return PosicionesQueNecesito;
	}


	public void crea(StructureJSON PosicionActualSt, List<StructureJSON> PositionS) {
		 for (int i = 0; i < PositionS.size(); i++) 
				 if (PosicionesQueNecesito.size()>i)
					 PositionS.get(i).setValue(Integer.toString(PosicionesQueNecesito.get(i)));
				
			

		 	
		 
		 
		OperationalValueTypeJSON SourceAutoBienAqui=null;
	
	for (OperationalValueTypeJSON OperaValTyJSON : PosicionActualSt.getShows()) {
	if (OperaValTyJSON.getView().toLowerCase().equals("proto")
			&&OperaValTyJSON.getName().toLowerCase().equals("source")
			&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
				SourceAutoBienAqui=OperaValTyJSON;
	} 
		 
//	 Window.alert(valido.getOperationalValues()+"-Z OV -Z"+SourceAutoBienAqui);
	 boolean found=false;
		for (OperationalValueJSON termProcesado : PosicionActualSt.getOperationalValues()) {
			if ((SourceAutoBienAqui!=null)&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId()))
				{
				termProcesado.setValue("manual");
//				Window.alert("found");
				found=true;
				}
		}
		
		if (!found&&SourceAutoBienAqui!=null)
		{
			PosicionActualSt.getOperationalValues().add(new OperationalValueJSON(null, SourceAutoBienAqui.getId().get(0), "manual"));
//			Window.alert("no found -Z Created");
		}
		
//		 Window.alert("Hola3");
		Padre.RefreshStatus();
		
	}

}
