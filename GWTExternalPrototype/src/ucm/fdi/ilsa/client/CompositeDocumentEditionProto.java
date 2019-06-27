/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.json.client.JSONArray;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONString;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.Grid;
import com.google.gwt.user.client.ui.HasHorizontalAlignment;
import com.google.gwt.user.client.ui.HasVerticalAlignment;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.PushButton;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.VerticalPanel;

import fdi.ucm.server.interconect.model.DocumentCompleteJSON;
import fdi.ucm.server.interconect.model.GrammarJSON;
import fdi.ucm.server.interconect.model.OperationalValueJSON;
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
	private StructureJSON DeleteBien;
	private HashMap<StructureJSON, StructureJSON> Termino_Delete;
	private DockLayoutPanel dockLayoutPanel;
	private Label DeleteLabel;
	private PushButton DeleteDocumentButton;
	private PushButton RecoverDocumentButton;
	private HashMap<Label, Integer> posicionTabla;
	private HashMap<Integer, Label> posicionTablaI;
	private LinkedList<Label> ActualSelected;
	private PushButton AlanteIma;
	private PushButton AtrasIma;
	private Label LabelImage;
	private int ImagenActual;
	private Image Ima;
	private HashMap<StructureJSON, StructureJSON> Termino_CUI;
	private OperationalValueTypeJSON SourceAutoBien;
	private Long CollectioNumber;
	private HashSet<String> GlobalDelete;
	
	private static final String DEFAULTIMAGE = "default.png";
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
		CollectioNumber=Documento.getGramatica().get(0).getColeccion();
		
		StructureJSON SS=null;
		for (GrammarJSON Gr : Documento.getGramatica()) 	
		{
			SS=gotContext(Gr.getListaS(), ContextId);
			if (SS!=null)
				break;	
			
		}		
		
		GlobalDelete=new HashSet<String>();
		
		
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
				
				
				
				dockLayoutPanel = new DockLayoutPanel(Unit.PX);
				VP.add(dockLayoutPanel);
				dockLayoutPanel.setSize(Width+"px", Heigh+"px");
				
				
				PanelPrincipal=dockLayoutPanel;
				
//				Label T4 = new Label();
//				T4.setText("Ahora mismo hay que empezar a meter la informacion poco a poco");
//				VP.add(T4);
				
				
				 HorizontalPanel PanelBotones=new HorizontalPanel();
				    PanelBotones.setSpacing(6);
				    PanelBotones.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
//				    PanelBotones.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_CENTER);
				    dockLayoutPanel.addSouth(PanelBotones,80);
				    
				    
				    HorizontalPanel PanelDelete=new HorizontalPanel();
					PanelDelete.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
					PanelDelete.addStyleName("botoneraDelete");
					PanelDelete.setSpacing(3);
					
					SimplePanel basicoEspacio= new SimplePanel();
					basicoEspacio.addStyleName("simplePanel");
					
					DeleteLabel=new Label(StringConstants.getInstance().get("deletelabel"));
					DeleteDocumentButton = new PushButton(new Image("Proto/ejectnormalred.png"));
					DeleteDocumentButton.setTitle(StringConstants.getInstance().get("deletelabel"));
					DeleteDocumentButton.addClickHandler(new ClickHandler() {
						
						@Override
						public void onClick(ClickEvent arg0) {
							
							DeleteBien.setSelectedValue(true);
							
							processActualDocument();
							
							//TODO ARREGLAR
//							if (Estado!=null)
//							{
//								String Docu = Estado.getPorRevisar().get(ActualDocument);
//								if (!Estado.getBorrados().contains(Docu))
//									Estado.getBorrados().add(Docu);
//								
//								
//								
//								
//								RefreshStatus();
//							}
							
						}
					});
							
					
					RecoverDocumentButton = new PushButton(new Image("Proto/ejectnormal.png"));
					RecoverDocumentButton.setTitle(StringConstants.getInstance().get("recoverlabel"));
					RecoverDocumentButton.addClickHandler(new ClickHandler() {
						
						@Override
						public void onClick(ClickEvent arg0) {
							
							DeleteBien.setSelectedValue(false);
							//TODO ARREGLAR
//							if (Estado!=null)
//							{
//								String Docu = Estado.getPorRevisar().get(ActualDocument);
//								if (Estado.getBorrados().contains(Docu))
//									Estado.getBorrados().remove(Docu);
//								
//								
//								
//								RefreshStatus();
//							}
							
							processActualDocument();
						}
					});
					
					PanelDelete.add(basicoEspacio);
					PanelDelete.add(DeleteDocumentButton);
					PanelDelete.add(RecoverDocumentButton);
					PanelDelete.add(DeleteLabel);
					
					PanelBotones.add(PanelDelete);
				    
				    
				
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
		
		cleanPanels();

			processActualDocument();
			
		
	}

private void processActualDocument() {
	
	RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/getDelete/"+getCollectionNumber());

    try {
        builder.sendRequest(null, new RequestCallback() {
            public void onError(Request request, Throwable exception) {
            	 Window.alert("Error ->"+exception.getMessage());
            	 processActualDocumentContinue();
            	 GlobalDelete=new HashSet<String>();
            }

            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode()!=0&&response.getStatusCode()==200)
                	{
                	 GlobalDelete=new HashSet<String>();
                	 try {
                		 JSONValue value = JSONParser.parseLenient(response.getText());
                    	 JSONArray authorObject = value.isArray();
                    	 for (int i = 0; i < authorObject.size(); i++) {
                    		 GlobalDelete.add(authorObject.get(i).isString().stringValue());
//                    		 Window.alert(authorObject.get(i).isString().stringValue());
                    	 }
                    	 
					} catch (Exception e) {
						e.printStackTrace();
						Window.alert("Error ->"+e.getMessage());
					}
                	 
                	 
                	}
                else
                	{
                	Window.alert("Error ->"+response.getStatusCode() + "->"+response.getStatusText());
                	 GlobalDelete=new HashSet<String>();
                	}
                
                
                processActualDocumentContinue();
            }
        });

    } catch (RequestException e) {
       e.printStackTrace();
       Window.alert(e.getMessage());
    }
			

		
		
		
	}
	
	
	
protected void processActualDocumentContinue() {
	//TODO FALTA EL ANOTADO
//	if (procesaAnotado())	
//	{
//		SiAnnotButton.setVisible(true);
//		NoAnnotButton.setVisible(false);
//	}
//	else
//	{
//		SiAnnotButton.setVisible(false);
//		NoAnnotButton.setVisible(true);
//	}
		

	
	
	if (procesaBorrado())
	{
		
		ProcesaLabelRecuperar(true);		
		procesaSentenciasPhrases(true);
		processPaneles();
//		procesaPanelMetamap();
//		procesaUsed();
		processImage();
		procesaTraduccion();			
		
	}
	else
	{	

	ProcesaLabelRecuperar(false);	
	procesaSentenciasPhrases(false);
	procesaAuto();
	procesaManual();
	procesaGlobalDelete();
	procesaLocalDelete();
//	procesaPanelMetamap();
	procesaUsed();
	processImage();
	procesaTraduccion();
	}
}




private void procesaUsed() {
	RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/getUsedTerms/"+getCollectionNumber());
	try {
        builder.sendRequest(null, new RequestCallback() {
            public void onError(Request request, Throwable exception) {
            	 Window.alert("Error ->"+exception.getMessage());
            }

            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode()!=0&&response.getStatusCode()==200)
                	{
                	
                	Window.alert("Lista ->"+response.getText());
                	
//                	 GlobalDelete=new HashSet<String>();
//                	 try {
//                		 JSONValue value = JSONParser.parseLenient(response.getText());
//                    	 JSONArray authorObject = value.isArray();
//                    	 for (int i = 0; i < authorObject.size(); i++) {
//                    		 GlobalDelete.add(authorObject.get(i).isString().stringValue());
////                    		 Window.alert(authorObject.get(i).isString().stringValue());
//                    	 }
//                    	 
//					} catch (Exception e) {
//						e.printStackTrace();
//						Window.alert("Error ->"+e.getMessage());
//					}
//                	 
//                	 
                	}
                else
                	{
                	Window.alert("Error ->"+response.getStatusCode() + "->"+response.getStatusText());
                	}
                
            
            }
        });

    } catch (RequestException e) {
       e.printStackTrace();
       Window.alert(e.getMessage());
    }
}







private void procesaTraduccion() {
	PanelTra.clear();
	LoadIMG.setSize("100%", "135px");
	PanelTra.add(LoadIMG);
	String Entrada = getDocumentText();
	
	RequestBuilder builder = new RequestBuilder(RequestBuilder.POST, ServerINFO.ServerURI+"ProtoEditorService/service/translade/"+getCollectionNumber());
	builder.setHeader("Content-type", "text/plain");
	
	try {
      builder.sendRequest(Entrada, new RequestCallback() {
          public void onError(Request request, Throwable exception) {
          	 Window.alert("Error ->"+exception.getMessage());
          }

          public void onResponseReceived(Request request, Response response) {
              if (response.getStatusCode()!=0&&response.getStatusCode()==200)
              	{
            	  
            	  JSONValue value = JSONParser.parseLenient(response.getText());
             	 JSONArray authorObject = value.isArray();
              	 
             	List<List<String>> arg0=new LinkedList<List<String>>();
             	 
             	 for (int i = 0; i < authorObject.size(); i++) {
             		 
             		 try {
             			JSONArray authorObjectint=authorObject.get(i).isArray();
             			
             			List<String> EntradaSalida=new LinkedList<String>();
             			
             			for (int j = 0; j < authorObjectint.size(); j++) {
             				EntradaSalida.add(authorObjectint.get(j).isString().stringValue());	
             			}
             			
             			arg0.add(EntradaSalida);
             			
             			
             			
					} catch (Exception e) {
						e.printStackTrace();
					}
             		
             		 
             	 }
             	
             	
            	PanelTra.clear();
      			ScrollPanel SP= new ScrollPanel();
      			SP.setSize("100%", "100%");
      			VerticalPanel VP=new VerticalPanel();
      			SP.add(VP);
      			PanelTra.add(SP);
      			if (arg0.size()>0){
      				for (List<String> traducEle : arg0) {
      					VerticalPanel VPP=new VerticalPanel();
      					VP.add(VPP);
      					for (String widget : traducEle) {
      						Label Tra=new Label(widget);
      						VPP.add(Tra);
      					}
      				}
      			}
      			else
      				for (String widget : arg0.get(0)) {
      					Label Tra=new Label(widget);
      					VP.add(Tra);
      				}
              	 
              	}
              else
              	{
              	Window.alert("Error ->"+response.getStatusCode() + "->"+response.getStatusText());
              	}

          }
      });

  } catch (RequestException e) {
     e.printStackTrace();
     Window.alert(e.getMessage());
  }
	
	
	
	
	
}


public String getDocumentText() {
	StringBuffer SB=new StringBuffer();
	
	for (int i = 0; i < UteranciasBien.size(); i++){ 
		String Sentence=UteranciasBien.get(i).getValue();
		SB.append(Sentence);
		}
	
	
//	if (ActualDocumentProcesated!=null)
//		for (String string : ActualDocumentProcesated.getSentence_Order())
//			SB.append(string);

	return SB.toString();
}




private void procesaGlobalDelete() {
	PanelRemGlob.clear();
	
	
	
	
	HashSet<String> remglob = getglobaldelete();
	ScrollPanel SPanel=new ScrollPanel();
	PanelRemGlob.add(SPanel);
//	VerticalPanel Vertical=new VerticalPanel();
//	SPanel.add(Vertical);
	
	
	
	
	HashMap<String, TermProcesado> autoTerm = new HashMap<String,TermProcesado>();
	
	List<TermProcesado> ProcesarLimpio=new LinkedList<TermProcesado>();
	HashMap<TermProcesado, StructureJSON> Term_dEL=new HashMap<TermProcesado, StructureJSON>();
	
	for (StructureJSON termelem : TermElements) {
		
		if (!termelem.getValue().trim().isEmpty())
		{
			
			
			boolean AutoCorrecto = true;
			for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
				if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
				{
					AutoCorrecto=false;
					break;	
				}
			}
			
			if (AutoCorrecto)
				{
				
			HashSet<Integer> posiciones=new HashSet<Integer>();
			List<StructureJSON> listaPosiciones = Termino_Posicion.get(termelem);
			if (listaPosiciones!=null&&!listaPosiciones.isEmpty())
			{
				for (StructureJSON pos : listaPosiciones)
				{
					if (!pos.getValue().isEmpty())
					{
						try {
							
							int position=Integer.parseInt(pos.getValue())-1;
							if (position<0)
								position=0;
							
							posiciones.add(position);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
				
				
				if (!posiciones.isEmpty())
				{
					
					
					List<StructureJSON> semanticas = Termino_Seman.get(termelem);
					List<String> semantica= new LinkedList<String>();
						if (semanticas!=null)
					{
						for (StructureJSON seman : semanticas) {
							if (!seman.getValue().trim().isEmpty())
								semantica.add(seman.getValue().trim());
						}
					}
						
						StructureJSON CUI=Termino_CUI.get(termelem);
					
					TermProcesado N=new TermProcesado(termelem.getValue().trim(), posiciones);
					N.setSemantica(semantica);
					
					if (CUI!=null)
					N.setCUI(CUI.getValue());
					
					StructureJSON Delete=Termino_Delete.get(termelem);
					
					autoTerm.put(N.getTerm(),N);
					Term_dEL.put(N, Delete);
					
					//TODO FALTA LA CONDICION DEL GENERAKL
					if (Delete!=null&&remglob.contains(N.getTerm()))
						ProcesarLimpio.add(N);

						
				}
			}
			}
			
		}
		
		
	}
	
	LinkedList<LabelTerm> TermLocalDeleteList=new LinkedList<LabelTerm>();

			for (TermProcesado string : ProcesarLimpio) {

					
					LabelTerm labe=new LabelTerm(string,this);
						TermLocalDeleteList.add(labe);
			}
	
	Grid g = new Grid(TermLocalDeleteList.size(), 2);
	g.setWidth("100%");
	SPanel.add(g);
	
	for (int j = 0; j < TermLocalDeleteList.size(); j++) {
		LabelTerm labe = TermLocalDeleteList.get(j);
		g.setWidget(j, 0, labe);
		if (EditorMode())
		{
		PushButton RecoverGlobal = new PushButtonRecoberGlobal(labe,this);
		g.setWidget(j, 1, RecoverGlobal);
		}
	}
	
}


private void procesaManual() {
	PanelManual.clear();

	ScrollPanel SPanel=new ScrollPanel();
	PanelManual.add(SPanel);
	
	
	
	
	HashMap<String, TermProcesado> autoTerm = new HashMap<String,TermProcesado>();
	
	List<TermProcesado> ProcesarLimpio=new LinkedList<TermProcesado>();
	HashMap<TermProcesado, StructureJSON> Term_Str=new HashMap<TermProcesado, StructureJSON>();
	
	for (StructureJSON termelem : TermElements) {
		
		if (!termelem.getValue().trim().isEmpty())
		{
			
			
			boolean AutoCorrecto = true;
			for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
				if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
				{
					AutoCorrecto=false;
					break;	
				}
			}
			
			if (!AutoCorrecto)
				{
				
			HashSet<Integer> posiciones=new HashSet<Integer>();
			List<StructureJSON> listaPosiciones = Termino_Posicion.get(termelem);
			if (listaPosiciones!=null&&!listaPosiciones.isEmpty())
			{
				for (StructureJSON pos : listaPosiciones)
				{
					if (!pos.getValue().isEmpty())
					{
						try {
							
							int position=Integer.parseInt(pos.getValue())-1;
							if (position<0)
								position=0;
							
							posiciones.add(position);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
				
				
				if (!posiciones.isEmpty())
				{
					
					
					List<StructureJSON> semanticas = Termino_Seman.get(termelem);
					List<String> semantica= new LinkedList<String>();
						if (semanticas!=null)
					{
						for (StructureJSON seman : semanticas) {
							if (!seman.getValue().trim().isEmpty())
								semantica.add(seman.getValue().trim());
						}
					}
						
						StructureJSON CUI=Termino_CUI.get(termelem);
					
					TermProcesado N=new TermProcesado(termelem.getValue().trim(), posiciones);
					N.setSemantica(semantica);
					
					if (CUI!=null)
					N.setCUI(CUI.getValue());
					
//					StructureJSON Delete=Termino_Delete.get(termelem);
//					
					autoTerm.put(N.getTerm(),N);
					Term_Str.put(N, termelem);
					
						ProcesarLimpio.add(N);

						
				}
			}
			}
			
		}
		
		
	}
	

		Grid g = new Grid(ProcesarLimpio.size(), 2);
		g.setWidth("100%");
		SPanel.add(g);
		
		for (int j = 0; j < ProcesarLimpio.size(); j++) {
			TermProcesado termProcesado = ProcesarLimpio.get(j);
			Label labe=new LabelTerm(termProcesado,this);
			PushButton RecoverGlobal = new PushButtonDeleteManual(termProcesado,this,Term_Str.get(termProcesado));
			g.setWidget(j, 0, labe);
			if (EditorMode())
				g.setWidget(j, 1, RecoverGlobal);
			//Vertical.add(labe);
			
		}
		

	}







private void procesaLocalDelete() {
	PanelRemDocu.clear();
	
	
	
	
	HashSet<String> remglob = getglobaldelete();
	ScrollPanel SPanel=new ScrollPanel();
	PanelRemDocu.add(SPanel);
//	VerticalPanel Vertical=new VerticalPanel();
//	SPanel.add(Vertical);
	
	
	
	
	HashMap<String, TermProcesado> autoTerm = new HashMap<String,TermProcesado>();
	
	List<TermProcesado> ProcesarLimpio=new LinkedList<TermProcesado>();
	List<TermProcesado> ProcesaDeleteFuturo=new LinkedList<TermProcesado>();
	HashMap<TermProcesado, StructureJSON> Term_dEL=new HashMap<TermProcesado, StructureJSON>();
	
	for (StructureJSON termelem : TermElements) {
		
		if (!termelem.getValue().trim().isEmpty())
		{
			
			
			boolean AutoCorrecto = true;
			for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
				if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
				{
					AutoCorrecto=false;
					break;	
				}
			}
			
			if (AutoCorrecto)
				{
				
			HashSet<Integer> posiciones=new HashSet<Integer>();
			List<StructureJSON> listaPosiciones = Termino_Posicion.get(termelem);
			if (listaPosiciones!=null&&!listaPosiciones.isEmpty())
			{
				for (StructureJSON pos : listaPosiciones)
				{
					if (!pos.getValue().isEmpty())
					{
						try {
							
							int position=Integer.parseInt(pos.getValue())-1;
							if (position<0)
								position=0;
							
							posiciones.add(position);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
				
				
				if (!posiciones.isEmpty())
				{
					
					
					List<StructureJSON> semanticas = Termino_Seman.get(termelem);
					List<String> semantica= new LinkedList<String>();
						if (semanticas!=null)
					{
						for (StructureJSON seman : semanticas) {
							if (!seman.getValue().trim().isEmpty())
								semantica.add(seman.getValue().trim());
						}
					}
						
						StructureJSON CUI=Termino_CUI.get(termelem);
					
					TermProcesado N=new TermProcesado(termelem.getValue().trim(), posiciones);
					N.setSemantica(semantica);
					
					if (CUI!=null)
					N.setCUI(CUI.getValue());
					
					StructureJSON Delete=Termino_Delete.get(termelem);
					
					autoTerm.put(N.getTerm(),N);
					Term_dEL.put(N, Delete);
					
					//TODO FALTA LA CONDICION DEL GENERAKL
					if (Delete!=null&&Delete.isSelectedValue()&&!remglob.contains(N.getTerm()))
						ProcesarLimpio.add(N);
					else 
						if (Delete!=null&&remglob.contains(N.getTerm())) 
							ProcesaDeleteFuturo.add(N);
						
				}
			}
			}
			
		}
		
		
	}
	
	
	for (TermProcesado termProcesado : ProcesaDeleteFuturo) {
		StructureJSON Delete = Term_dEL.get(termProcesado);
		if (Delete!=null)
			Delete.setSelectedValue(true);
		}
	
	
	LinkedList<LabelTerm> TermLocalDeleteList=new LinkedList<LabelTerm>();

			for (TermProcesado string : ProcesarLimpio) {

					
					LabelTerm labe=new LabelTerm(string,this);
						TermLocalDeleteList.add(labe);
			}
	
	Grid g = new Grid(TermLocalDeleteList.size(), 2);
	g.setWidth("100%");
	SPanel.add(g);
	
	for (int j = 0; j < TermLocalDeleteList.size(); j++) {
		LabelTerm labe = TermLocalDeleteList.get(j);
		g.setWidget(j, 0, labe);
		if (EditorMode())
		{
		PushButton RecoverGlobal = new PushButtonRecoberLocal(labe,this,Term_dEL.get(labe.getTermio()));
		g.setWidget(j, 1, RecoverGlobal);
		}
	}
		
	}







private HashSet<String> getglobaldelete() {
	return GlobalDelete;
}







private void procesaAuto() {
		
		PanelAuto.clear();
		ScrollPanel SPanel=new ScrollPanel();
		SPanel.addStyleName("autoScroll");
		PanelAuto.add(SPanel);
		
		

		HashSet<String> remglob = getglobaldelete();

		HashMap<String, TermProcesado> autoTerm = new HashMap<String,TermProcesado>();
		
		List<TermProcesado> ProcesarLimpio=new LinkedList<TermProcesado>();
		HashMap<TermProcesado, StructureJSON> Term_St=new HashMap<TermProcesado, StructureJSON>();
		
		for (StructureJSON termelem : TermElements) {
			
			if (!termelem.getValue().trim().isEmpty())
			{
				
				
				boolean AutoCorrecto = true;
				for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
					if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
					{
						AutoCorrecto=false;
						break;	
					}
				}
				
				if (AutoCorrecto)
					{
					
				HashSet<Integer> posiciones=new HashSet<Integer>();
				List<StructureJSON> listaPosiciones = Termino_Posicion.get(termelem);
				if (listaPosiciones!=null&&!listaPosiciones.isEmpty())
				{
					for (StructureJSON pos : listaPosiciones)
					{
						if (!pos.getValue().isEmpty())
						{
							try {
								int position=Integer.parseInt(pos.getValue())-1;
								if (position<0)
									position=0;
								
								posiciones.add(position);
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					}
					
					
					if (!posiciones.isEmpty())
					{
						
						
						List<StructureJSON> semanticas = Termino_Seman.get(termelem);
						List<String> semantica= new LinkedList<String>();
 						if (semanticas!=null)
						{
							for (StructureJSON seman : semanticas) {
								if (!seman.getValue().trim().isEmpty())
									semantica.add(seman.getValue().trim());
							}
						}
 						
 						StructureJSON CUI=Termino_CUI.get(termelem);
 						 						
						TermProcesado N=new TermProcesado(termelem.getValue().trim(), posiciones);
						N.setSemantica(semantica);
						
						if (CUI!=null)
						N.setCUI(CUI.getValue());
						
						StructureJSON Delete=Termino_Delete.get(termelem);
						
						autoTerm.put(N.getTerm(),N);
						Term_St.put(N, termelem);
						
						//TODO FALTA LA CONDICION DEL GENERAKL
						if ((Delete==null|| !Delete.isSelectedValue())&&!remglob.contains(N.getTerm()))
							ProcesarLimpio.add(N);

							
					}
				}
				}
				
			}
			
			
		}
		

		PintalLimpio(ProcesarLimpio,SPanel,Term_St);

		
		

	}
	
	
	
	private void PintalLimpio(List<TermProcesado> ProcesarLimpio, ScrollPanel SPanel, HashMap<TermProcesado, StructureJSON> term_St) {
		Grid g = new Grid(ProcesarLimpio.size(), 2);
		g.setWidth("100%");
		SPanel.add(g);
		
		for (int i = 0; i < ProcesarLimpio.size(); i++) {
			
			TermProcesado termProcc =ProcesarLimpio.get(i);
			
			LabelTerm labe=new LabelTerm(termProcc,this);
			
			g.setWidget(i, 0, labe);
			
			StructureJSON StructTerm = term_St.get(termProcc);
			if (StructTerm==null)
				return;
			
			StructureJSON DeleteElem = Termino_Delete.get(StructTerm);
			
			PushButton DeleteLocal = new PushButtonLocal(this,DeleteElem);
			PushButton DeleteGlobal = new PushButtonGlobal(labe,this);
			PushButton EditTerm = new PushButtonEdit(labe,this,StructTerm,SourceAutoBien,TermElements,Termino_Posicion.get(StructTerm));
			
			HorizontalPanel HP=new HorizontalPanel();
			HP.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
			HP.setWidth("100%");
			
			HorizontalPanel HP2=new HorizontalPanel();
			HP2.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
			HP2.setSpacing(2);
			
			HP2.add(DeleteLocal);
			HP2.add(DeleteGlobal);
			HP2.add(EditTerm);
			
			HP.add(HP2);
			
			if (EditorMode())
				g.setWidget(i, 1, HP);
		}
	
}







	private void processImage() {
		PanelImg.clear();
		VerticalPanel PanelImages=new VerticalPanel();
		PanelImages.setSize("100&", "100%");
		PanelImg.add(PanelImages);
		
		HorizontalPanel Botonera=new HorizontalPanel();
		Botonera.setSpacing(3);
		Botonera.setHeight("60px");
		AlanteIma = new PushButton(new Image("Proto/forward.png"));
		AtrasIma = new PushButton(new Image("Proto/back.png"));
		AlanteIma.setEnabled(false);
		AtrasIma.setEnabled(false);
		Botonera.add(AtrasIma);
		LabelImage=new Label("");
		Botonera.add(LabelImage);
		Botonera.add(AlanteIma);
		
		AlanteIma.addClickHandler(new ClickHandler() {
			


			@Override
			public void onClick(ClickEvent arg0) {
				ImagenActual++;
				printImage();
				
			}
		});
		
		AtrasIma.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				ImagenActual--;
				printImage();
				
			}
		});
		
		SimplePanel P = new SimplePanel();
		P.setSize("100%", "100%");
		
		Ima=new Image(DEFAULTIMAGE);
		
		Ima.setHeight((PanelImgTra.getOffsetHeight()-164)+"px");
		Ima.getOffsetHeight();
		Ima.getOffsetWidth();
		
		Ima.addStyleName("imageDoc");
		
		
		Ima.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				if (!Ima.getUrl().equals(DEFAULTIMAGE))
				{
					
				PopupPanel Dialog=new PopUpPanelImage(Ima.getUrl());
				Dialog.center();
			
				}
			}
		});
		
		ImagenActual=0;
		
		if (ImagenesBien.size()>0)
			printImage();
			
		P.add(Ima);
		PanelImages.add(P);
		PanelImages.add(Botonera);
		
		
	}
	
	
	private void printImage() {
		
		LinkedList<StructureJSON> ImagenesBienConElem = new LinkedList<StructureJSON>();
		for (StructureJSON imavalue : ImagenesBien) 
			if (imavalue.getValue()!=null&&!imavalue.getValue().isEmpty())
				ImagenesBienConElem.add(imavalue);
		
		
		
		Ima.setUrl(ImagenesBienConElem.get(ImagenActual).getValue());
		if (ImagenActual<ImagenesBienConElem.size()-1)
			AlanteIma.setEnabled(true);
		else
			AlanteIma.setEnabled(false);
		
		if (ImagenActual>0)
			AtrasIma.setEnabled(true);
		else
			AtrasIma.setEnabled(false);
		
		LabelImage.setText(((ImagenActual+1)+"/"+ImagenesBienConElem.size()));
	}
	
	
	
	private void processPaneles() {
		PanelAuto.clear();
		
//		String DocumenA = Estado.getPorRevisar().get(ActualDocument);
//		HashSet<String> remLocal = Estado.getDoc_Words_State().get(DocumenA);
//		HashSet<String> remglob = Estado.getDoc_Words_State_Global();
//		
//		if (remglob==null)
//			remglob=new HashSet<String>();
//		
//		if (remLocal==null)
//			remLocal=new HashSet<String>();
//		
//		for (int i = 0; i < ActualDocumentProcesated.getTerm_Words_Pos_Table_Procesed().size(); i++) {
//			
//			TermProcesado termProcc =ActualDocumentProcesated.getTerm_Words_Pos_Table_Procesed().get(i);
//			
//			
//			if (!remglob.contains(termProcc.getTerm()))
//				remLocal.add(termProcc.getTerm());
//
//		}
//		
//		List<TermProcesado> remgadded = Estado.getDoc_Words_State_Add().get(DocumenA);
//		if (remgadded!=null)
//			{
//			remgadded.clear();
//			Estado.getDoc_Words_State_Add().put(DocumenA, remgadded);
//			}
//		
//		Estado.getDoc_Words_State().put(DocumenA, remLocal);
		
		{
		Label Deleted=new Label(StringConstants.getInstance().get("deletelabeldocument"));
		Deleted.addStyleName("labelDeleteDoc");
		
		PanelAuto.add(Deleted);
		}
		
		{
		PanelManual.clear();
		Label Deleted=new Label(StringConstants.getInstance().get("deletelabeldocument"));
		Deleted.addStyleName("labelDeleteDoc");
		
		PanelManual.add(Deleted);
		}
		
		{
			PanelRemGlob.clear();
			Label Deleted=new Label(StringConstants.getInstance().get("deletelabeldocument"));
			Deleted.addStyleName("labelDeleteDoc");
			
			PanelRemGlob.add(Deleted);
			}
		
		{
			PanelRemDocu.clear();
			Label Deleted=new Label(StringConstants.getInstance().get("deletelabeldocument"));
			Deleted.addStyleName("labelDeleteDoc");
			
			PanelRemDocu.add(Deleted);
			}
		
		
		{
			PanelUsed.clear();
			Label Deleted=new Label(StringConstants.getInstance().get("deletelabeldocument"));
			Deleted.addStyleName("labelDeleteDoc");
			
			PanelUsed.add(Deleted);
			}
		
		{
			PanelMetamap.clear();
			Label Deleted=new Label(StringConstants.getInstance().get("deletelabeldocument"));
			Deleted.addStyleName("labelDeleteDoc");
			
			PanelMetamap.add(Deleted);
			}
		
		
		

		
	}
	
	
	private void ProcesaLabelRecuperar(boolean recuperar_) {
		if (recuperar_)
		{
		DeleteLabel.setText(StringConstants.getInstance().get("recoverlabel"));
		
		DeleteDocumentButton.setVisible(false);
		RecoverDocumentButton.setVisible(true);
		}
		else
		{
			DeleteLabel.setText(StringConstants.getInstance().get("deletelabel"));
			
			DeleteDocumentButton.setVisible(true);
			RecoverDocumentButton.setVisible(false);
			}
		
		
		if (!EditorMode())
		{
			DeleteDocumentButton.setVisible(false);
			RecoverDocumentButton.setVisible(false);
			if (recuperar_)
				DeleteLabel.setText(StringConstants.getInstance().get("inactive"));
			else
				DeleteLabel.setText(StringConstants.getInstance().get("active"));
		}
	}
	
	
private void procesaSentenciasPhrases(boolean borrado_) {
		
		PanelPhrases.clear();
		
		
		
		VerticalPanel DP=new VerticalPanel();
		DP.setWidth("100%");
		PanelPhrases.add(DP);
		
		
		Label Findings=new Label(StringConstants.getInstance().get("DocumentFindings"));
		Findings.addStyleName("boldData");
		DP.add(Findings);
		
		ScrollPanel SPanel=new ScrollPanel();
//		SPanel.addStyleName("maxmin400x200");
		//SPanel.setWidth(200+"px");
		
		SPanel.addStyleName("scrollPharese");
	
		DP.add(SPanel);
//		PanelPhrases.add(SPanel);
		
		VerticalPanel Vertical=new VerticalPanel();
		SPanel.add(Vertical);
		
		posicionTabla = new HashMap<Label, Integer>();
		posicionTablaI = new HashMap<Integer,Label>();
		ActualSelected = new LinkedList<Label>();
		
		int posi=0;
		
		for (int i = 0; i < UteranciasBien.size(); i++) {
			String Sentence=UteranciasBien.get(i).getValue();
			
			HorizontalPanel PanelSente=new HorizontalPanel();
			PanelSente.setSpacing(5);
			Vertical.add(PanelSente);
			
			
			List<String> palabras=new LinkedList<String>();
			String frase=Sentence;
			frase=frase.trim();
			frase=frase.replace(",", ", ");
			frase=frase.replace(" ,", ",");
			frase=frase.replace(";", "; ");
			frase=frase.replace(" ;", ";");
			frase=frase.replace("/", "/ ");
			frase=frase.replace(" /", "/");
			frase=frase.replace("-", "- ");
			frase=frase.replace(" -", "-");
			frase=frase.replace("  ", " ");
				String[] palabrasS = frase.split(" ");
				for (String palabraS : palabrasS) {
					if (!palabraS.trim().isEmpty())
						palabras.add(palabraS);

				}
			frase=frase+".";

			for (int j = 0; j < palabras.size(); j++) {
				Integer posiA=new Integer(posi++);
				Label labe=new Label(palabras.get(j));
				PanelSente.add(labe);
				posicionTabla.put(labe, posiA);
				posicionTablaI.put(posiA, labe);
				
				if (!borrado_&&EditorMode())
					labe.addClickHandler(new ClickHandler() {
						
						@Override
						public void onClick(ClickEvent arg0) {
							Label labe=(Label) arg0.getSource();
							if (ActualSelected.contains(labe))
									{
									labe.removeStyleName("selectedLab");
									ActualSelected.remove(labe);
									}			
							else
							{
								labe.addStyleName("selectedLab");
								ActualSelected.add(labe);
								
							}
							
						}
					});
					
			}
		}
		
		int PP=PanelPhrases.getOffsetHeight();
		int F=Findings.getOffsetHeight();
		int heightD=PP-F;
		SPanel.setHeight(heightD+"px");
		SPanel.setWidth(PanelPhrases.getOffsetWidth()+"px");
	}
	
	


	protected boolean EditorMode() {
	return true;
}







	private boolean procesaBorrado() {
		
		if (DeleteBien.isSelectedValue())
			return true;
		else
			return false;
	}







	private void cleanPanels() {
		PanelPhrases.clear();
		PanelPhrases.add(LoadPH);
		
		PanelAuto.clear();
		PanelAuto.add(LoadAUTO);
		
		PanelManual.clear();
		PanelManual.add(LoadMAN);
		
		PanelMetamap.clear();
		PanelMetamap.add(LoadMeta);
		
		PanelUsed.clear();
		PanelUsed.add(LoadUsed);
		
		PanelImg.clear();
		PanelImg.add(LoadIMG);
		
		PanelTra.clear();
		PanelTra.add(LoadTra);
		
		PanelRemDocu.clear();
		PanelRemDocu.add(LoadREMDocu);
		
		PanelRemGlob.clear();
		PanelRemGlob.add(LoadREMGlob);
		
		
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
		SourceAutoBien = null;
		for (OperationalValueTypeJSON OperaValTyJSON : sS.getShows()) {
			//REvisa las cosas de la vista, basicamente que pone term y auto
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")&&OperaValTyJSON.getName().toLowerCase().equals("type")&&OperaValTyJSON.getDefault().toLowerCase().equals("term"))
				TermBien = true;
			
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")&&OperaValTyJSON.getName().toLowerCase().equals("source")&&OperaValTyJSON.getDefault().toLowerCase().equals("auto")&&SourceAutoBien==null)
				SourceAutoBien = OperaValTyJSON;
			
			if (TermBien&&(SourceAutoBien!=null))
				break;
				
		}
		
		
		
		if (!TermBien)
			Errores.add("Term structure element view should have term type proto->type->term");
		
		if (SourceAutoBien==null)
			Errores.add("Term structure element view should have term type proto->source->auto");


		TermElements=new LinkedList<StructureJSON>();
		UteranciasBien=new LinkedList<StructureJSON>();
		ImagenesBien=new LinkedList<StructureJSON>();
		DeleteBien=null;
		
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
			
			
			if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Basic)
				for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
					if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
					ViewstructureJSON.getDefault().toLowerCase().equals("delete"))
						DeleteBien=structureJSON;
				}
			
			
		}
		
		
		
		if (UteranciasBien.isEmpty())
			Errores.add("I cant found Utterances structure element in this context father with view proto->type->utterance");
		
		if (DeleteBien==null)
			Errores.add("I cant found Delete structure element in this context father with view proto->type->delete");
		
		if (ImagenesBien.isEmpty())
			Errores.add("I cant found Images structure element in this context father with view proto->type->image");
			
		if (!UteranciasBien.isEmpty()&&!UteranciasBien.get(0).isMultivalued())
			Errores.add("Utterances structure element should be multivalued");
		
		if (!ImagenesBien.isEmpty()&&!ImagenesBien.get(0).isMultivalued())
			Errores.add("Images structure element should be multivalued");
		
		
		Termino_Posicion=new HashMap<StructureJSON, List<StructureJSON>>();
		
		Termino_Seman=new HashMap<StructureJSON, List<StructureJSON>>();
		
		Termino_Delete=new HashMap<StructureJSON, StructureJSON>();
		
		Termino_CUI=new HashMap<StructureJSON, StructureJSON>();
		
		
		
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
			
			
			StructureJSON DeleteElement = null;
			for (StructureJSON structureJSON : termElem.getSons()) {
				if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Basic)
					for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
						if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
						ViewstructureJSON.getDefault().toLowerCase().equals("delete"))
							DeleteElement=structureJSON;
					}
			}
			
			StructureJSON CUIElement = null;
			for (StructureJSON structureJSON : termElem.getSons()) {
				if (structureJSON.getTypeOfStructure()==TypeOfStructureEnum.Text)
					for (OperationalValueTypeJSON ViewstructureJSON : structureJSON.getShows()) {
						if (ViewstructureJSON.getView().toLowerCase().equals("proto")&&ViewstructureJSON.getName().toLowerCase().equals("type")&&
						ViewstructureJSON.getDefault().toLowerCase().equals("cui"))
							CUIElement=structureJSON;
					}
			}
			
			
			
			Termino_Posicion.put(termElem, PositionsList);
			Termino_Seman.put(termElem, SemanticList);
			
			if (DeleteElement!=null)
				Termino_Delete.put(termElem, DeleteElement);
			
			if (CUIElement!=null)
				Termino_CUI.put(termElem, CUIElement);
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
		
		if (!(ListSemantic.isEmpty())
				&&(ListSemantic.get(0).getValue().isEmpty()))
			Errores.add("Term element should have almost one Semantic element with semantic view proto->type->semantic");
		
		if (!(ListPosition.isEmpty())
				&&!(ListPosition.get(0).getValue().isEmpty())
				&&!(ListPosition.get(0).getValue().get(0).isMultivalued())
						)
				Errores.add("Position structure element should be multivalued");
		

		
		if (!(ListSemantic.isEmpty())
				&&!(ListSemantic.get(0).getValue().isEmpty())
				&&!(ListSemantic.get(0).getValue().get(0).isMultivalued())
						)
				Errores.add("Semantic structure element should be multivalued");
		
		
		if (Termino_Delete.isEmpty())
			Errores.add("Term structure element should have delete structure element with position view proto->type->delete");
		
		
		if (Termino_CUI.isEmpty())
			Errores.add("Term structure element should have CUI structure element with position view proto->type->cui");
		
		
		
		
		
		for (String err : Errores) {
			console("E2:"+err);
		}
		
		
		return Errores;
		
	}


	public LinkedList<Label> getActualSelected() {
		return ActualSelected;
	}

	public HashMap<Integer, Label> getLabelsByPos() {
		return posicionTablaI;
	}
	
	
	
	public HashMap<Label, Integer> getPosicionTabla() {
		return posicionTabla;
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
		List<TermProcesado> getUsedTerms=getTermsUsed();
		sendtoused(getUsedTerms);
		setVariableBase2(Documento,RandomIdVars);
		
	}
	
	
	private void sendtoused(List<TermProcesado> getUsedTerms) {
		
		RequestBuilder builder = new RequestBuilder(RequestBuilder.POST, ServerINFO.ServerURI+"ProtoEditorService/service/setUsedTerms/"+getCollectionNumber()+"/"+Documento.getDocumento().getId());
		builder.setHeader("Content-type", "application/json");
		
		
		JSONArray lista=new JSONArray();
		List<JSONObject> authorList = new LinkedList<JSONObject>();
		for (int i = 0; i < getUsedTerms.size(); i++) {
			TermProcesado termProcesado = getUsedTerms.get(i);
			JSONObject jsonAuthor = new JSONObject();
            jsonAuthor.put("CUI", new JSONString(termProcesado.getCUI()));
            jsonAuthor.put("Term", new JSONString(termProcesado.getTerm()));
            authorList.add(jsonAuthor);
            lista.set(i, jsonAuthor);
		}
		
		
		GWT.log(lista.toString());
		
		try {
	      builder.sendRequest(lista.toString(), new RequestCallback() {
	          public void onError(Request request, Throwable exception) {
	          	 Window.alert("Error ->"+exception.getMessage());
	          }

	          public void onResponseReceived(Request request, Response response) {
	              if (response.getStatusCode()!=0&&response.getStatusCode()==200)
	            	  console(response.getText());
	              else
	              	{
	              	Window.alert("Error ->"+response.getStatusCode() + "->"+response.getStatusText());
	              	}

	          }
	      });

	  } catch (RequestException e) {
	     e.printStackTrace();
	     Window.alert(e.getMessage());
	  }
	
}







	private List<TermProcesado> getTermsUsed() {
		
		HashSet<String> remglob = getglobaldelete();

		HashMap<String, TermProcesado> autoTerm = new HashMap<String,TermProcesado>();
		
		List<TermProcesado> ProcesarLimpio=new LinkedList<TermProcesado>();
		HashMap<TermProcesado, StructureJSON> Term_St=new HashMap<TermProcesado, StructureJSON>();
		
		for (StructureJSON termelem : TermElements) {
			
			if (!termelem.getValue().trim().isEmpty())
			{
				
				
				boolean AutoCorrecto = true;
				for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
					if (SourceAutoBien.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
					{
						AutoCorrecto=false;
						break;	
					}
				}
				
//				if (AutoCorrecto)
//					{
					
				HashSet<Integer> posiciones=new HashSet<Integer>();
				List<StructureJSON> listaPosiciones = Termino_Posicion.get(termelem);
				if (listaPosiciones!=null&&!listaPosiciones.isEmpty())
				{
					for (StructureJSON pos : listaPosiciones)
					{
						if (!pos.getValue().isEmpty())
						{
							try {
								int position=Integer.parseInt(pos.getValue())-1;
								if (position<0)
									position=0;
								
								posiciones.add(position);
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
					}
					
					
					if (!posiciones.isEmpty())
					{
						
						
						List<StructureJSON> semanticas = Termino_Seman.get(termelem);
						List<String> semantica= new LinkedList<String>();
 						if (semanticas!=null)
						{
							for (StructureJSON seman : semanticas) {
								if (!seman.getValue().trim().isEmpty())
									semantica.add(seman.getValue().trim());
							}
						}
 						
 						StructureJSON CUI=Termino_CUI.get(termelem);
						
						TermProcesado N=new TermProcesado(termelem.getValue().trim(), posiciones);
						N.setSemantica(semantica);
						
						if (CUI!=null)
						N.setCUI(CUI.getValue());
						
						StructureJSON Delete=Termino_Delete.get(termelem);
						
						autoTerm.put(N.getTerm(),N);
						Term_St.put(N, termelem);
						
						console("Term->"+N.getTerm());
						if (Delete==null|| !Delete.isSelectedValue())
						{
						if (AutoCorrecto&&!remglob.contains(N.getTerm()))
							ProcesarLimpio.add(N);
						else if (!AutoCorrecto)
							ProcesarLimpio.add(N);
						}
						console("TermList->"+Integer.toString(ProcesarLimpio.size()));
							
					}
				}
//				}
				
			}
			
			
		}
		return ProcesarLimpio;
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






	public void RefreshStatus() {
		//TODO SUPER IMPORTANTE POR AHORA

		processActualDocument();
		
	}







	public Long getCollectionNumber() {
		return CollectioNumber;
	}
}
