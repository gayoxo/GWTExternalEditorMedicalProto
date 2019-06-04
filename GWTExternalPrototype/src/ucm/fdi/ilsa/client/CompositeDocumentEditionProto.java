/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

import fdi.ucm.server.interconect.model.DocumentCompleteJSON;
import fdi.ucm.server.interconect.model.GrammarJSON;
import fdi.ucm.server.interconect.model.OperationalValueTypeJSON;
import fdi.ucm.server.interconect.model.StructureJSON;
import fdi.ucm.server.interconect.model.StructureJSON.TypeOfStructureEnum;

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
	private HashMap<StructureJSON, List<StructureJSON>> Termino_Posicion;
	private HashMap<StructureJSON, List<StructureJSON>> Termino_CUI;
	private LinkedList<StructureJSON> TermElements;
	private LinkedList<StructureJSON> UteranciasBien;
	private LinkedList<StructureJSON> ImagenesBien;
	private HashMap<StructureJSON, List<StructureJSON>> Termino_Seman;
	private VerticalPanel PanelPhrases;
	private Image LoadPH;
	private VerticalPanel PanelAuto;
	private Image LoadAUTO;
	private VerticalPanel PanelManual;
	private Image LoadMAN;
	private VerticalPanel PanelRemDocu;
	private VerticalPanel PanelRemGlob;
	private Image LoadREMDocu;
	private VerticalPanel PanelMetamap;
	private Image LoadREMGlob;
	private Image LoadMeta;
	private VerticalPanel PanelUsed;
	private Image LoadUsed;
	private VerticalPanel PanelImgTra;
	private VerticalPanel PanelImg;
	private Image LoadIMG;
	private VerticalPanel PanelTra;
	private Image LoadTra;
	
	
	private static final String LOADINGGEN = "Loader.gif";
	

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
		

	/**	
		String Mostar2=JSOSucion.toString();
		*/
		
		Documento=CreateJSONObject.create(JSOSucion);

		/**	
		String Mostar3=CreateJSONObject.create(Documento).toString();
		*/
		
		
//		Label T = new Label();
////		T.setSize(Width+"px", Heigh+"px");
//		T.setText(Mostar);
//		VP.add(T);
		
		
		/**
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
				console(SS.getName());
				}
		}
		
		*/
		
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
			
			console("1:"+SS.getName());

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
				
//				Label T4 = new Label();
//				T4.setText("Ahora mismo hay que empezar a meter la informacion poco a poco");
//				VP.add(T4);
				
				CreaLosPaneles();
				
				
				//TODO AQUI DARLE CAÑA
				//AQUI SABEMOS QUE ES VALIDO
				}
				
		
			}

	}
	

	

	
	
	
	private void CreaLosPaneles() {
		ScrollPanel SP=new ScrollPanel();
		PanelPrincipal.add(SP);
		
		
		HorizontalPanel PanelCentral=new HorizontalPanel();
		SP.add(PanelCentral);
		PanelCentral.setHeight("100%");
		
//		PanelCentral.setSize("100%", "100%");
		
		VerticalPanel PanelLabelTag=new VerticalPanel();
		PanelCentral.add(PanelLabelTag);
		PanelLabelTag.setSize("100%", "100%");
		
		PanelPhrases=new VerticalPanel();
		PanelLabelTag.add(PanelPhrases);
		PanelPhrases.addStyleName("panelPhrases");
		PanelPhrases.setSize("100%", "100%");
		LoadPH=new Image(LOADINGGEN);
		
		
		PanelAuto=new VerticalPanel();
		PanelLabelTag.add(PanelAuto);
		PanelAuto.addStyleName("panelAuto");
		PanelAuto.setSize("100%", "100%");
		LoadAUTO=new Image(LOADINGGEN);
		
		
		PanelManual=new VerticalPanel();
		PanelLabelTag.add(PanelManual);
		PanelManual.addStyleName("panelManual");
		PanelManual.setSize("100%", "100%");
		LoadMAN=new Image(LOADINGGEN);

		HorizontalPanel PanelRemovedT = new HorizontalPanel();
		PanelLabelTag.add(PanelRemovedT);
		PanelRemovedT.addStyleName("panelRemoved");
		PanelRemovedT.setSize("100%", "100%");
		
		PanelRemDocu=new VerticalPanel();
		PanelRemovedT.add(PanelRemDocu);
		PanelRemDocu.addStyleName("panelRemD");
		PanelRemDocu.setSize("100%", "100%");
		
		PanelRemGlob=new VerticalPanel();
		PanelRemovedT.add(PanelRemGlob);
		PanelRemGlob.addStyleName("panelRemI");
		PanelRemGlob.setSize("100%", "100%");
		
		LoadREMDocu=new Image(LOADINGGEN);
		LoadREMGlob=new Image(LOADINGGEN);
		
		VerticalPanel PanelMetaUsed=new VerticalPanel();
		PanelCentral.add(PanelMetaUsed);
		PanelMetaUsed.setHeight("100%");
		
		PanelMetamap=new VerticalPanel();
		PanelMetaUsed.add(PanelMetamap);
		PanelMetamap.addStyleName("panelMetamap");
		PanelMetamap.setHeight("100%");
//		PanelMetamap.setSize("100%", "100%");
		LoadMeta=new Image(LOADINGGEN);

		
		PanelUsed=new VerticalPanel();
		PanelMetaUsed.add(PanelUsed);
		PanelUsed.addStyleName("panelUses");
		PanelUsed.setHeight("100%");
//		PanelUsed.setSize("100%", "100%");
		LoadUsed=new Image(LOADINGGEN);
		
		
		PanelImgTra=new VerticalPanel();
		PanelCentral.add(PanelImgTra);
		PanelImgTra.setSize("100%", "100%");
		//PanelImgTra.setWidth("100%");
		
		VerticalPanel PanelImgTra2=new VerticalPanel();
		PanelImgTra.add(PanelImgTra2);
		//PanelImgTra.setSize("100%", "100%");
		PanelImgTra2.setWidth("100%");
		
		PanelImg=new VerticalPanel();
		PanelImgTra2.add(PanelImg);
		PanelImg.addStyleName("panelImages");
//		PanelImg.setSize("50%", "100%");
		//PanelImg.setHeight("100%");
//		PanelImg.setSize("100%","100%");
		LoadIMG=new Image(LOADINGGEN);
		
		
		PanelTra=new VerticalPanel();
		PanelImgTra2.add(PanelTra);
		PanelTra.addStyleName("panelTraduct");
//		PanelTra.setSize("100%", "100%");
//		PanelTra.setHeight("100%");
//		PanelTra.setWidth("100%");
		LoadTra=new Image(LOADINGGEN);
		
		
		
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
					
					StructureJSON SSFin=gotContext(Gr.getListaS(), sS.getId().get(0));
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
		
	
		
		
		if (!sS.isMultivalued())
			Errores.add("Term structure element should be multivalued");
		
		if (sS.getTypeOfStructure()!= TypeOfStructureEnum.Text)
			Errores.add("Term structure element should be text type");
		
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
			Errores.add("Term structure element view should have term type proto->type->term");
		
		if (!SourceAutoBien)
			Errores.add("Term structure element view should have term type proto->source->auto");


		TermElements=new LinkedList<StructureJSON>();
		UteranciasBien=new LinkedList<StructureJSON>();
		ImagenesBien=new LinkedList<StructureJSON>();
		
		for (StructureJSON structureJSON : ZonaBUsqueda){ 
			if (structureJSON.getId().equals(sS.getClaseOf())||structureJSON.getClaseOf().equals(sS.getClaseOf()))
				TermElements.add(structureJSON);

			if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Text)
				for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
					if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
					ViewstructureJSON.getDefault().toLowerCase().equals("utterance"))
						UteranciasBien.add(structureJSON);
				}

				
			if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Resource)
				for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
					if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
					ViewstructureJSON.getDefault().toLowerCase().equals("image"))
						ImagenesBien.add(structureJSON);
				}
			
		}
		
		
		
		if (UteranciasBien.isEmpty())
			Errores.add("I cant found Utterances structure element in this context father with view proto->type->utterance");
		
		if (ImagenesBien.isEmpty())
			Errores.add("I cant found Images structure element in this context fathe with view proto->type->image");
			
		if (!UteranciasBien.isEmpty()&&!UteranciasBien.get(0).isMultivalued())
			Errores.add("Utterances structure element should be multivalued");
		
		if (!ImagenesBien.isEmpty()&&!ImagenesBien.get(0).isMultivalued())
			Errores.add("Images structure element should be multivalued");
		
		
		Termino_Posicion=new HashMap<StructureJSON, List<StructureJSON>>();
		
		Termino_Seman=new HashMap<StructureJSON, List<StructureJSON>>();
		
		
		
		
		
		
		for (StructureJSON termElem : TermElements) {
			
			List<StructureJSON> PositionsList = new LinkedList<StructureJSON>();
			for (StructureJSON structureJSON : termElem.getSons()) {
				if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Text)
					for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
						if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
						ViewstructureJSON.getDefault().toLowerCase().equals("position"))
							PositionsList.add(structureJSON);
					}
			}
			
			List<StructureJSON> SemanticList = new LinkedList<StructureJSON>();
			for (StructureJSON structureJSON : termElem.getSons()) {
				if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Text)
					for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
						if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
						ViewstructureJSON.getDefault().toLowerCase().equals("semantic"))
							SemanticList.add(structureJSON);
					}
			}
			
			
			
			
			
			Termino_Posicion.put(termElem, PositionsList);
			Termino_Seman.put(termElem, SemanticList);
		}
		
		
		for (String err : Errores) {
			console("E2:"+err);
		}
		
		console("TP:"+Termino_Posicion.size());
		console("TS:"+Termino_Posicion.size());
		
		
		LinkedList<Entry<StructureJSON, List<StructureJSON>>> ListSemantic = new LinkedList<Map.Entry<StructureJSON,List<StructureJSON>>>(Termino_Seman.entrySet());
		LinkedList<Entry<StructureJSON, List<StructureJSON>>> ListPosition = new LinkedList<Map.Entry<StructureJSON,List<StructureJSON>>>(Termino_Posicion.entrySet());
		
		
		if (!(ListPosition.isEmpty())
				&&(ListPosition.get(0).getValue().isEmpty()))
			Errores.add("Term structure element should have almost one Position structure element with position view proto->type->position");

		
		
		if (!(ListPosition.isEmpty())
				&&!(ListPosition.get(0).getValue().isEmpty())
				&&!(ListPosition.get(0).getValue().get(0).isMultivalued())
						)
				Errores.add("Position structure element should be multivalued");
		
		
		
		if (!(ListSemantic.isEmpty())
				&&(ListSemantic.get(0).getValue().isEmpty()))
			Errores.add("Term element should have almost one Semantic element with semantic view proto->type->semantic");
		
		
		if (!(ListSemantic.isEmpty())
				&&!(ListSemantic.get(0).getValue().isEmpty())
				&&!(ListSemantic.get(0).getValue().get(0).isMultivalued())
						)
				Errores.add("Semantic structure element should be multivalued");
			
		
		
		
		/**
		
		if (!(ListSemantic.isEmpty())
				&&!(ListSemantic.get(0).getValue().isEmpty())
				&&(ListSemantic.get(0).getValue().get(0).getSons().isEmpty())
						)
			Errores.add("Semantic element should have a CUI element");
		
		*/
		
		
		
		
		if(!(ListSemantic.isEmpty())
				&&
				!(ListSemantic.get(0).getValue().isEmpty())
				&&
				!(ListSemantic.get(0).getValue().get(0).getSons().isEmpty()))
			{
			
			
			console("TP1: "+ ListSemantic.size() );
			console("TP2: "+ ListSemantic.get(0).getValue().size() );
			console("TP3: "+ ListSemantic.get(0).getValue().get(0).getSons().size() );
			console("TP4: "+ ListSemantic.get(0).getValue().get(0).getSons().get(0).getShows().size() );
			
				boolean CUIBoo = false;
				for (OperationalValueTypeJSON ViewstructureJSON : ListSemantic.get(0).getValue().get(0).getSons().get(0).getShows()) {
					if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
							ViewstructureJSON.getDefault().toLowerCase().equals("cui"))
						CUIBoo=true;
				}
				
				if (CUIBoo)
					if (ListSemantic.get(0).getValue().get(0).getSons().get(0).getTypeOfStructure()!=TypeOfStructureEnum.Text)
						Errores.add("Semantic element should have a CUI element with Text Type");
					else;
				else
					Errores.add("Semantic structure element should have a CUI element with CUI view proto->type->cui");
				
			}
			
		
		for (String err : Errores) {
			console("E2:"+err);
		}
		
		
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


	public static native void console(String text)
	/*-{
	    console.log(text);
	}-*/;
}
