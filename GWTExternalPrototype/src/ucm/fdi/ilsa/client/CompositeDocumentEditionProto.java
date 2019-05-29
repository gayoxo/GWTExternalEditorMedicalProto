/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.List;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.VerticalPanel;

import fdi.ucm.server.interconect.model.DocumentCompleteJSON;
import fdi.ucm.server.interconect.model.GrammarJSON;
import fdi.ucm.server.interconect.model.OperationalValueTypeJSON;
import fdi.ucm.server.interconect.model.StructureJSON;

/**
 * @author Joaquin Gayoso-Cabada
 *
 */
public class CompositeDocumentEditionProto{


	private static final String ERROR_GRAMMAR = "Error Context can be applied to a grammar";
	private static final String ERROR_STRUCTURE = "Error Context can be applied because the structure not match";


	private String RandomIdVars;
	private int Heigh;
	private int Width;
	private CompositeDocumentEditionProto Yo;
	private Long ContextId;
	private Panel PanelPrincipal;
	private DocumentCompleteJSON Documento;
	private StructureJSON SuperS;

	public CompositeDocumentEditionProto(String randomIdVars, Long contextId, int Height, boolean Grammar) {
		RandomIdVars=randomIdVars;
		this.Heigh=Height-32;
		
		Width=Window.getClientWidth();
		
//		actualpage=0;
		
		
		
	int Variacion=315;
		
		if (Width>515)
			Width=Width-Variacion;
		
		ContextId=contextId;
		
		Yo=this;

		
		com.google.gwt.user.client.ui.RootPanel RP=com.google.gwt.user.client.ui.RootPanel.get(RandomIdVars);
		
		
		VerticalPanel VP = new VerticalPanel();
		VP.setSpacing(20);
		RP.add(VP);
		
		PanelPrincipal=VP;
		

		
		String SDocumentoS =getVariableBaseJSONOBJS(RandomIdVars);
		
//		Window.alert("hELLO Panel1 "+ SDocumentoS);
		
		JSONObject JSOSucion = (JSONObject) JSONParser.parseStrict(SDocumentoS);
		
//		Window.alert("hELLO Panel2 "+ JSOSucion.toString());
		

		
		
		
//		JSONValue JSOSucionV = JSOSucion.get(JSOSucion.keySet().iterator().next());
//		if (JSOSucionV.isObject()!=null)
//			JSOSucion=JSOSucionV.isObject();
		

		
		String Mostar2=JSOSucion.toString();
		
		Documento=CreateJSONObject.create(JSOSucion);

		String Mostar3=CreateJSONObject.create(Documento).toString();
		
//		Label T = new Label();
////		T.setSize(Width+"px", Heigh+"px");
//		T.setText(Mostar);
//		VP.add(T);
		
		Label T2 = new Label();
//		T.setSize(Width+"px", Heigh+"px");
		T2.setText(Mostar2);
		VP.add(T2);
		
		Label T3 = new Label();
//		T.setSize(Width+"px", Heigh+"px");
		T3.setText(Mostar3);
		VP.add(T3);
		
	
		
		
		for (GrammarJSON Gr : Documento.getGramatica()) {
			
			StructureJSON SS=gotContext(Gr.getListaS(), ContextId);
			if (SS!=null)
				{
				Label T4 = new Label();
	//			T.setSize(Width+"px", Heigh+"px");
				T4.setText(SS.getName());
				VP.add(T4);
				}
		}
		
		
		StructureJSON SS=null;
		for (GrammarJSON Gr : Documento.getGramatica()) 	
		{
			SS=gotContext(Gr.getListaS(), ContextId);
			if (SS!=null)
				break;
		}		
		
		if (SS==null)
		{
			Label T4 = new Label();
			T4.setText("Context not found");
			VP.add(T4);
		}else
			{
			List<String> Errores = test(SS);
			if (!Errores.isEmpty())
			{
				Label T4 = new Label();
				T4.setText("Context not match with requiered structure");
				VP.add(T4);
				
				for (String string : Errores) {
					Label T5 = new Label();
					T5.setText(string);
					VP.add(T5);
				}
				
				
			}else
				{
				
				
				
				//TODO AQUI DARLE CAÑA
				//AQUI SABEMOS QUE ES VALIDO
				}
				
		
			}

	}
	

	

	
	
	
	private List<String> test(StructureJSON sS) {
		ArrayList<String> Errores = new ArrayList<String>();
		List<StructureJSON> ZonaBUsqueda=null;
		Long SSPadre = sS.getFather();
		if (SSPadre!=null)
			{
			//CASO GRAMATICA
			StructureJSON SSFin=null;
				for (GrammarJSON Gr : Documento.getGramatica()) {
					
					SSFin=gotContext(Gr.getListaS(), SSPadre);
					if (SSFin!=null)
						break;
				}
			
			if (SSFin!=null)
				ZonaBUsqueda=SSFin.getSons();
				
			}else
			{
				GrammarJSON GSFin=null;
				for (GrammarJSON Gr : Documento.getGramatica()) {
					
					StructureJSON SSFin=gotContext(Gr.getListaS(), SSPadre);
					if (SSFin!=null)
						{
						GSFin=Gr;
						break;
						}
				}
				
				if (GSFin!=null)
					ZonaBUsqueda=GSFin.getListaS();
				
			}
		
		
		if (ZonaBUsqueda==null)
			Errores.add("I cant found the context correct father");
		
		boolean TermBien = false;
		boolean SourceAutoBien = false;
		for (OperationalValueTypeJSON OperaValTyJSON : sS.getShows()) {
			//REvisa las cosas de la vista, basicamente que pone term y auto
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")&&OperaValTyJSON.getName().toLowerCase().equals("type")&&OperaValTyJSON.getDefault().toLowerCase().equals("term"))
				TermBien = true;
			
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")&&OperaValTyJSON.getName().toLowerCase().equals("source")&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
				SourceAutoBien = true;
			
			if (TermBien&&SourceAutoBien)
				break;
				
		}
		
		if (!TermBien)
			Errores.add("I cant found term view in this context");
		
		if (!SourceAutoBien)
			Errores.add("I cant found term view where type of source auto in this context");

		//Ahora ya tengo la lista y de to. Ademas se que el objeto termino existe que es lo primero que voy a ver
		
		
	
		
		return Errores;
		
	}







	private StructureJSON gotContext(List<StructureJSON> listaS, Long contextId) {
		for (StructureJSON structterJSON : listaS) {
			if (structterJSON.getId().get(0).equals(contextId))
				return structterJSON;
			else
				{
				StructureJSON S=gotContext(structterJSON.getSons(),contextId);
				if (S!=null)
					return S;
				}
		}
		return null;
	}
	
	
	private List<StructureJSON> gotMultivaluedContext(List<StructureJSON> listaS, Long contextId) {
		List<StructureJSON> Hermanos=new ArrayList<StructureJSON>();
		for (StructureJSON structterJSON : listaS) {
			if (structterJSON.getId().get(0).equals(contextId))
				{
					for (StructureJSON structureJSON2 : listaS) {
						if (structureJSON2.getClaseOf().equals(SuperS.getClaseOf())&&(SuperS.getFather()==structureJSON2.getFather()||
								(SuperS.getFather()!=null&&structureJSON2.getFather()!=null&&SuperS.getFather().equals(structureJSON2.getFather()))))
							Hermanos.add(structureJSON2);
					}
					
					return Hermanos;
				}
			else
				{
				List<StructureJSON> S=gotMultivaluedContext(structterJSON.getSons(),contextId);
				if (S!=null)
					return S;
				}
		}
		return null;
	}



	private GrammarJSON gotContext(ArrayList<GrammarJSON> gramatica, Long contextId) {
		for (GrammarJSON grammarJSON : gramatica) {
			if (grammarJSON.getId().equals(contextId))
				return grammarJSON;
		}
		return null;
		
	}
	
	
	public static native Panel getContextDiv(String ContextID) /*-{

	$wnd.daletmp = '$wnd.dale = $wnd.VDocExpand'+ContextID;
	eval($wnd.daletmp)
	  return  $wnd.dale;

	}-*/;
	
	
	
	public static native String getVariableBaseJSONOBJS(String documentID2) /*-{
	$wnd.daletmp = '$wnd.dale = $wnd.JSDocExpand'+documentID2;
eval($wnd.daletmp)
  return  $wnd.dale;	  

}-*/;
	
	
	public static native JavaScriptObject getVariableBaseJObj(String documentID2) /*-{
	$wnd.daletmp = '$wnd.dale = $wnd.DocExpand'+documentID2;
eval($wnd.daletmp)
  return  $wnd.dale;	  

}-*/;

	public static String getIcon() {
		return "proto.png";
		
	}



//	@Override
	public void persistJS() {
		GWT.log(Documento.toString());
		setVariableBase2(Documento,RandomIdVars);
		
	}
	
	
	private JSONObject setVariableBase2(DocumentCompleteJSON documento2, String randomIdVars2) {
		JSONObject DocumentoJ = CreateJSONObject.create(documento2);
//		JSONObject DocumentoJ = CreateJSONObject(documento2);
		setVariableBase3(DocumentoJ.toString(),randomIdVars2);
		return DocumentoJ;
		
	}



	public static native void setVariableBase3(String DocumentoExpandido, String idrandomdoct) /*-{


	$wnd.tmp=DocumentoExpandido;
	$wnd.str = '$wnd.JSDocExpand'+idrandomdoct +' = $wnd.tmp';
	console.log($wnd.str);
	eval($wnd.str)

	}-*/;




	public int getHeigh() {
		return Heigh;
	}
	


	protected boolean isMultivalued() {
		return false;
	}
	
	
	


//	@Override
	public boolean isWaitingUpdate() {
		return false;
	}


//	@Override
	public boolean updateContext() {
		return false;
	}


//	@Override
	public void setWaitingUpdate(boolean update) {
		
		
	}


	
}
