/**
 * 
 */
package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.Collections;
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
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyPressHandler;
import com.google.gwt.event.dom.client.MouseOutEvent;
import com.google.gwt.event.dom.client.MouseOutHandler;
import com.google.gwt.event.dom.client.MouseOverEvent;
import com.google.gwt.event.dom.client.MouseOverHandler;
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
import com.google.gwt.user.client.ui.StackPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.ToggleButton;
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
    private VerticalPanel Fixed;
	private ToggleButton toggleButton;
	private ScrollPanel PanelAlphabetOrder;
	private ScrollPanel PanelSemantycOrder;
	private Image LoadMetaICO;
	private HorizontalPanel PanelBottonMas;
	private PushButton BotonBack;
	private PushButton BotonForward;
	private int posicionBuscador;
	private VerticalPanel PanelMetamapSol;
	private Image LoadIMGSearch=new Image(LOADINGGEN);
	private TextBox Text;
	private boolean WaitingUpdate;
	private PosicionEspera EsperandoPosicion;
	private StructureJSON SS;
	private PushButton NoAnnotButton;
	private PopupPanel Annot;
	private StructureJSON Anotacion;
	
	private static final String DEFAULTIMAGE = "default.png";
	private static final String LOADINGGEN = "Loader.gif";
	private static final String PROTOICO = "Proto/medicine.png";
	private static PushButton SiAnnotButton = null;
	

	public CompositeDocumentEditionProto(String randomIdVars, Long contextId, int Height, boolean Grammar) {
		RandomIdVars=randomIdVars;
		this.Heigh=Height-32;
		
		Width=Window.getClientWidth();
		
//		actualpage=0;
		
		
		EsperandoPosicion=null;
		
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
		
		SS=null;
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
				    
				    
				    
				    HorizontalPanel PanelAnotacion=new HorizontalPanel();
					PanelAnotacion.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
					PanelAnotacion.addStyleName("botoneraTAnnotation");
					PanelAnotacion.setSpacing(3);
					
					SimplePanel PanelID3= new SimplePanel();
					PanelID3.addStyleName("simplePanel");
					
					NoAnnotButton = new PushButton(new Image("img/Notes-icon.png"));
					NoAnnotButton.setTitle("Without Annotations");
					
					NoAnnotButton.addClickHandler(new ClickHandler() {
						
						@Override
						public void onClick(ClickEvent arg0) {

							PopupPanel PanelAnotacion= new PanelAnotacionPopupPanel(Anotacion);
							
							if (Anotacion!=null&&!Anotacion.getValue().trim().isEmpty())
								PanelAnotacion.center();
							
						}
					});
					
					
					SiAnnotButton = new PushButton(new Image("img/Notes-2-icon.png"));
					
					Annot=new PopupPanel(true);
					SiAnnotButton.addMouseOutHandler(new MouseOutHandler() {
						
						@Override
						public void onMouseOut(MouseOutEvent arg0) {
							Annot.hide();
							
						}
					});
					SiAnnotButton.addMouseOverHandler(new MouseOverHandler() {
						
						private Label L;


						@Override
						public void onMouseOver(MouseOverEvent arg0) {
			
							if (L==null||Anotacion==null||Anotacion.getValue().trim().isEmpty())
								L=new Label("No Anot");
							else
//							if (Anotacion!=null&&!Anotacion.getValue().trim().isEmpty())
								L.setText(Anotacion.getValue());
							
							Annot.setWidget(L);
							Annot.showRelativeTo(SiAnnotButton);
							
						}
					});
					
					SiAnnotButton.addClickHandler(new ClickHandler() {
						
						@Override
						public void onClick(ClickEvent arg0) {

							
							PopupPanel PanelAnotacion= new PanelAnotacionPopupPanel(Anotacion);
							
							if (Anotacion!=null&&!Anotacion.getValue().trim().isEmpty())
								PanelAnotacion.center();
							
						}
					});
					
					SiAnnotButton.setVisible(false);
					
					PanelAnotacion.add(PanelID3);
					PanelAnotacion.add(NoAnnotButton);
					PanelAnotacion.add(SiAnnotButton);
					
					PanelBotones.add(PanelAnotacion);
				    
				    
				    
				    
				    
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
							
						
							
						}
					});
							
					
					RecoverDocumentButton = new PushButton(new Image("Proto/ejectnormal.png"));
					RecoverDocumentButton.setTitle(StringConstants.getInstance().get("recoverlabel"));
					RecoverDocumentButton.addClickHandler(new ClickHandler() {
						
						@Override
						public void onClick(ClickEvent arg0) {
							
							DeleteBien.setSelectedValue(false);
							
							
							processActualDocument();
						}
					});
					
					PanelDelete.add(basicoEspacio);
					PanelDelete.add(DeleteDocumentButton);
					PanelDelete.add(RecoverDocumentButton);
					PanelDelete.add(DeleteLabel);
					
					PanelBotones.add(PanelDelete);
				    
				    
				
				CreaLosPaneles();
				
				

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
		LoadMetaICO=new Image(PROTOICO);
		LoadMetaICO.addStyleName("metamapZoneLogo");

		
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
	
private boolean procesaAnotado() {
	if (Anotacion!=null&&!Anotacion.getValue().trim().isEmpty())
		return true;
	else
		return false;
}
	
	
protected void processActualDocumentContinue() {
	//TODO FALTA EL ANOTADO
	if (procesaAnotado())	
	{
		SiAnnotButton.setVisible(true);
		NoAnnotButton.setVisible(false);
	}
	else
	{
		SiAnnotButton.setVisible(false);
		NoAnnotButton.setVisible(true);
	}
		

	
	
	if (procesaBorrado())
	{
		
		ProcesaLabelRecuperar(true);		
		procesaSentenciasPhrases(true);
		processPaneles();
		procesaPanelMetamap(true);
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
	procesaPanelMetamap(false);
	procesaUsed();
	processImage();
	procesaTraduccion();
	}
}




private void procesaPanelMetamap(boolean _isdeleted) {
	if (!EditorMode()||_isdeleted)
	{
	PanelMetamap.clear();
	PanelMetamap.add(LoadMetaICO);
	}
	else
	{
		
//	Window.alert("Busqueda Metamap");
	
	PanelMetamap.clear();	
	
	posicionBuscador=0;
	
	DockLayoutPanel DC=new DockLayoutPanel(Unit.PX);
	DC.setHeight("100%");
	DC.setWidth("268px");
	
	PanelMetamap.add(DC);
	
	HorizontalPanel PanelFindPer=new HorizontalPanel();
	PanelFindPer.setVerticalAlignment(HasVerticalAlignment.ALIGN_MIDDLE);
	PanelFindPer.setSpacing(2);
	PanelFindPer.addStyleName("panelBotonesFinder");
	DC.addNorth(PanelFindPer, 60);
//	DC.add(PanelFindPer);
	
	PanelBottonMas=new HorizontalPanel();
	PanelBottonMas.setSpacing(4);
	DC.addSouth(PanelBottonMas, 60);
	PanelBottonMas.setVisible(false);
//	DC.add(PanelFindPer);
	BotonBack = new PushButton(new Image("Proto/back.png"));
	BotonForward = new PushButton(new Image("Proto/forward.png"));
	PanelBottonMas.add(BotonBack);
	PanelBottonMas.add(BotonForward);
	BotonBack.setEnabled(false);
	
	BotonBack.addClickHandler(new ClickHandler() {
		
		@Override
		public void onClick(ClickEvent arg0) {
			posicionBuscador--;
			processBusqueda();
		}
	});
	
	BotonForward.addClickHandler(new ClickHandler() {
		
		@Override
		public void onClick(ClickEvent arg0) {
			posicionBuscador++;
			processBusqueda();
		}
	});
	
	ScrollPanel PenelMetamapScroll = new ScrollPanel();
	DC.add(PenelMetamapScroll);
	PanelMetamapSol=new VerticalPanel();
	PenelMetamapScroll.add(PanelMetamapSol);
	PanelMetamapSol.setVisible(false);
	
	generaPanelFindPer(PanelFindPer);
	
	}
}







private void generaPanelFindPer(HorizontalPanel panelFindPer) {
	Text=new TextBox();
	PushButton BotonFind = new PushButton(new Image("Proto/search.png"));
	PushButton BotonAdd = new PushButton(new Image("Proto/import.png"));
	
	panelFindPer.add(Text);
	panelFindPer.add(BotonFind);
	panelFindPer.add(BotonAdd);
	
	
	Text.addKeyPressHandler(new KeyPressHandler() {
		
		@Override
		public void onKeyPress(KeyPressEvent arg0) {
			if (arg0.getNativeEvent().getKeyCode() == KeyCodes.KEY_ENTER){
				if (Text.getValue().trim().isEmpty())
					Window.alert(StringConstants.getInstance().get("cannotbeempty"));
				else
					{
					PanelBottonMas.setVisible(true);
					PanelMetamapSol.setVisible(true);
					posicionBuscador=1;
					processBusqueda();
					}
			}
			
		}
	});
	
	BotonFind.addClickHandler(new ClickHandler() {
		
		

		@Override
		public void onClick(ClickEvent arg0) {
			if (Text.getValue().trim().isEmpty())
				Window.alert(StringConstants.getInstance().get("cannotbeempty"));
			else
				{
				PanelBottonMas.setVisible(true);
				PanelMetamapSol.setVisible(true);
				posicionBuscador=1;
				processBusqueda();
				}
			
		}

		
	});
	
	
	BotonAdd.addClickHandler(new ClickHandler() {
		
		@Override
		public void onClick(ClickEvent arg0) {
			if (Text.getValue().trim().isEmpty())
				Window.alert(StringConstants.getInstance().get("cannotbeempty"));
			else
				{
				
				
				
				
				LinkedList<StructureJSON> elementos_validos=getTermElements();	
           	 
           	 StructureJSON valido=null;
       
           	 List<String> ListaDeAnteriores=new LinkedList<>();
           	 
           	 for (StructureJSON structureJSON : elementos_validos) {
					if (structureJSON.getValue()==null||structureJSON.getValue().trim().isEmpty())
						if (valido==null){
							valido=structureJSON;
						}else;			
					else if (structureJSON.getValue()!=null&&!structureJSON.getValue().trim().isEmpty())
						ListaDeAnteriores.add(structureJSON.getValue().trim());
						
				}
           	 
           	 
           	 if (valido!=null)
           	 	{        
           		 

           		 StructureJSON DeleteS=getTermino_Delete().get(valido);
           		 List<StructureJSON> PositionS=getTermino_Posicion().get(valido);
           		 
           		 boolean error=false;
           		 
           		 List<Integer> listaPosiciones=new LinkedList<Integer>();

           			 LinkedList<Label> SelectedT = getActualSelected();
           		
           			 if (!SelectedT.isEmpty())
           				 for (Label label : SelectedT) {
								Integer PosicionLabel=getPosicionTabla().get(label);
								if (PosicionLabel!=null)
									listaPosiciones.add(new Integer(PosicionLabel+1));
							
							}
           				 
           				 if (listaPosiciones.isEmpty())
           					 {
           					 Window.alert(StringConstants.getInstance().get("selectionempty"));
           					 error=true;
           					 }
           		 	
           	 
           		for (String label : ListaDeAnteriores) {
						if (label.toLowerCase().equals(Text.getValue().trim().toLowerCase()))
       					 {
       					 Window.alert(StringConstants.getInstance().get("termexist"));
       					 error=true;
       					 break;
       					 }
					}

//           				 Window.alert(listaPosiciones.size()+"");
           		 
           		 
           		 if (!error)
           		 
           		 {
           			
           		 
           		 
           		 if (PositionS!=null)
           		 	{
           			 
           			 
           			 if (PositionS.size()<listaPosiciones.size())
           				 {
           				 Window.alert("Necesitas mas posiciones");
           				EsperandoPosicion=new PosicionEspera(listaPosiciones,Yo,Text.getValue().trim());
           				setWaitingUpdate(true);
           				
           				
           			 Long idPositionClone=PositionS.get(0).getClaseOf();
// 				 	if (idPositionClone==null)
 				 		idPositionClone=PositionS.get(0).getId().get(0);
           				
    					createIterator(Long.toString(idPositionClone),Long.toString(Documento.getDocumento().getId()),"proto",false);

           				
           				 }
           			 else
           			 {
           			 //TODO Sin ampliar

           				 
           				 valido.setValue(Text.getValue().trim());         		 
                   		 
                   		 if (DeleteS!=null)
                   			 DeleteS.setSelectedValue(false);		 
           				 
           				 
           			 for (int i = 0; i < PositionS.size(); i++) 
           				 if (listaPosiciones.size()>i)
           					 PositionS.get(i).setValue(Integer.toString(listaPosiciones.get(i)));
							
						

           		 	
           		 
           		 
           		OperationalValueTypeJSON SourceAutoBienAqui=null;
    			
    			for (OperationalValueTypeJSON OperaValTyJSON : valido.getShows()) {
    			if (OperaValTyJSON.getView().toLowerCase().equals("proto")
    					&&OperaValTyJSON.getName().toLowerCase().equals("source")
    					&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
    						SourceAutoBienAqui=OperaValTyJSON;
    			} 
           		 
//    			 Window.alert(valido.getOperationalValues()+"-Z OV -Z"+SourceAutoBienAqui);
    			 boolean found=false;
           		for (OperationalValueJSON termProcesado : valido.getOperationalValues()) {
     				if ((SourceAutoBienAqui!=null)&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId()))
     					{
     					termProcesado.setValue("manual");
//     					Window.alert("found");
     					found=true;
     					}
     			}
           		
           		if (!found&&SourceAutoBienAqui!=null)
           		{
           			valido.getOperationalValues().add(new OperationalValueJSON(null, SourceAutoBienAqui.getId().get(0), "manual"));
//           			Window.alert("no found -Z Created");
           		}
           		
//           		 Window.alert("Hola3");
           		 RefreshStatus();
           		
           		 	}
           		 }

           		 }
           	 	}
           	 else {
           		 //TODO GENERAR NUEVO ELEMENTO
           		 Window.alert("Generar Nuevo ->"+Text.getValue());
           	 }
           		 

           	 
           	
		
				
				
//				//////////////////////////////////////////////////////////////////////
//				
//				boolean found=false;
//			
//				LinkedList<StructureJSON> elementos_validos=getTermElements();	
//           	 
//           	 StructureJSON valido=null;
//       
//           	 List<String> ListaDeAnteriores=new LinkedList<>();
//           	 
//           	 for (StructureJSON structureJSON : elementos_validos) {
//					if (structureJSON.getValue()==null||structureJSON.getValue().trim().isEmpty())
//						valido=structureJSON;
//					else if (structureJSON.getValue()!=null&&!structureJSON.getValue().trim().isEmpty())
//						ListaDeAnteriores.add(structureJSON.getValue().trim());
//						
//				}
//				
//           	for (String label : ListaDeAnteriores) {
//				if (label.toLowerCase().equals(Text.getValue().trim().toLowerCase()))
//					 {
//					 found=true;
//					 break;
//					 }
//			}
//				
//				
////				String DocumenA = Estado.getPorRevisar().get(ActualDocument);
////				List<TermProcesado> actuales = Estado.getDoc_Words_State_Add().get(DocumenA);
////				if (actuales==null)
////					actuales=new LinkedList<TermProcesado>();
////				
////				
////				
////				boolean found=false;
////				for (TermProcesado termino : actuales) {
////					if (termino.getTerm().equals(Text.getValue().trim()))
////					{
////					found=true;
////					break;
////					}
////				}
//				
//           		if (valido!=null)
//           		{
//           			
//           		 StructureJSON CUIS=getTermino_CUI().get(valido);
//        		 StructureJSON DeleteS=getTermino_Delete().get(valido);
//        		 List<StructureJSON> PositionS=getTermino_Posicion().get(valido);
//        		 List<StructureJSON> SemanS=getTermino_Seman().get(valido);
//           			
//           			
//           			if (found)
//    					Window.alert(StringConstants.getInstance().get("termexist"));
//    				else
//    				{
//    				
//    					
//    					valido.setValue(Name);
//           			 
//            			
//               		 
//               		 if (CUIS!=null)
//               			 CUIS.setValue("");
//               		 
//               		 if (DeleteS!=null)
//               			 DeleteS.setSelectedValue(false);
//               		 
//               		 
//               		 if (PositionS!=null)
//               		 	{
//               			 
//               			 if (PositionS.size()<listaPosiciones.size())
//               				 Window.alert("Ampliar Posiciones");
//               			 //TODO hay que ampliar casi seguro
//
//               			 for (int i = 0; i < PositionS.size(); i++) 
//               				 if (listaPosiciones.size()>i)
//               					 PositionS.get(i).setValue(Integer.toString(listaPosiciones.get(i)));
//								
//							
//
//               		 	}
//               		 
//               		 if (SemanS!=null)
//               		 	{
//               			 
//               			 if (SemanS.size()<SemanticasRec.size())
//               				 Window.alert("Ampliar Semanticas");
//               			 //TODO hay que ampliar casi seguro
//
////               			 Window.alert(SemanS.size()+"");
////               			 
////               			 Window.alert(SemanticasRec.size()+"");
//               			 
//               			 for (int i = 0; i < SemanS.size(); i++) 
//               				 if (SemanticasRec.size()>i)
//               					 SemanS.get(i).setValue(SemanticasRec.get(i));
//								
//							
//
//               		 	}
//               		 
////               		 Window.alert("Hola3");
//               		 RefreshStatus();
//               		
//    					
//    					
////    					HashSet<Integer> INteLis=new HashSet<Integer>();
////    					
////    					for (Label labe : ActualSelected) {
////    						Integer a = posicionTabla.get(labe);
////    						if (a!=null)
////    							INteLis.add(a);
////    					}	
////    					
////    					if (INteLis.isEmpty())
////    						Window.alert(StringConstants.getInstance().get("selectionempty"));
////    					else
////    					{	
////    					TermProcesado Nuevo=new TermProcesado(Text.getValue(), INteLis);
////    					actuales.add(Nuevo);
////    					Estado.getDoc_Words_State_Add().put(DocumenA,actuales);
////    					RefreshStatus();
////    					}
//    				}
//           			
//           		}
//           		else {
//           		 //TODO GENERAR NUEVO ELEMENTO
//           		 Window.alert("Generar Nuevo ->"+Text.getValue().trim());
//           	 }
           			
				
				}
			
		}
	});
}







protected void processBusqueda() {
	PanelMetamapSol.clear();
	PanelMetamapSol.add(LoadIMGSearch);
	
	//http://localhost:8080/ProtoEditorService/service/UMLSFind?q=lung&p=1
	RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/UMLSFind?q="+Text.getValue().trim()+"&p="+posicionBuscador);
	
	 try {
	        builder.sendRequest(null, new RequestCallback() {
	            public void onError(Request request, Throwable exception) {
	            	 Window.alert("Error ->"+exception.getMessage());

	            }

	            public void onResponseReceived(Request request, Response response) {
	                if (response.getStatusCode()!=0&&response.getStatusCode()==200)
	                	{
	                	
	                	 JSONValue value = JSONParser.parseLenient(response.getText());
                    	 LinkedList<String> authorObject = new LinkedList<String>(value.isObject().keySet());
               	
                    	 HashMap<String, String> arg0=new HashMap<>();
                    	 for (int i = 0; i < authorObject.size(); i++) {
//                    		Window.alert(authorObject.get(i)+" "+value.isObject().get(authorObject.get(i)).isString().stringValue());
                    		arg0.put(authorObject.get(i), value.isObject().get(authorObject.get(i)).isString().stringValue());
                    		}

	                	PanelMetamapSol.clear();
	        			Grid g = new Grid(arg0.keySet().size(), 2);
	        			g.setWidth("100%");
	        			PanelMetamapSol.add(g);
	        			List<String> Claves= new LinkedList<String>(arg0.keySet());
	        			
	        			for (int i = 0; i < Claves.size(); i++) {
	        				String Name = Claves.get(i);
	        				String Valor= arg0.get(Name);
	        				Label nuevo = new LabelUMLS(Name,Valor);
	        				g.setWidget(i, 0, nuevo);
	        				PushButton AddFromUMLSGlobal = new PushButtonUMLSImport(Name,Valor,Yo);
	        				g.setWidget(i, 1, AddFromUMLSGlobal);
	        			}
	        			
	        			if (posicionBuscador>1)
	        				BotonBack.setEnabled(true);
	        			else
	        				BotonBack.setEnabled(false);
	        			
	        			if (arg0.keySet().size()>1)
	        				BotonForward.setEnabled(true);
	        			else
	        				BotonForward.setEnabled(false);
	        			
	        		
	                	 
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







private void procesaUsed() {
	
	PanelUsed.clear();
	
	if (EditorMode())
	{
	RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/getUsedTerms/"+getCollectionNumber());
	try {
        builder.sendRequest(null, new RequestCallback() {


			public void onError(Request request, Throwable exception) {
            	 Window.alert("Error ->"+exception.getMessage());
            }

            public void onResponseReceived(Request request, Response response) {
                if (response.getStatusCode()!=0&&response.getStatusCode()==200)
                	{
                	
                	
                	Fixed=new VerticalPanel();
            		Fixed.setWidth("100%");
            		PanelUsed.add(Fixed);
            		
            		HorizontalPanel Opciones = new HorizontalPanel();
            		Fixed.add(Opciones);
            		
            		Opciones.setSpacing(5);

            		toggleButton = new ToggleButton("Change to Alphabetically Order", "Change to Semantic Group Order");
            	    toggleButton.addClickHandler(new ClickHandler() {
            	      public void onClick(ClickEvent event) {
            	        if (toggleButton.isDown()) {
            	        	 Fixed.remove(PanelSemantycOrder);
            	        	 Fixed.add(PanelAlphabetOrder);
            	        } else {
            	          Fixed.add(PanelSemantycOrder);
            	          Fixed.remove(PanelAlphabetOrder);
            	        }
            	      }
            	    });
            		
            	    Opciones.add(toggleButton);
            		
            	    
            	    
            	    PanelAlphabetOrder=new ScrollPanel();
            		PanelAlphabetOrder.setSize("100%", PanelUsed.getOffsetHeight()+"px");
            	    

            		PanelSemantycOrder=new ScrollPanel();
            		PanelSemantycOrder.setSize("100%", PanelUsed.getOffsetHeight()+"px");
                	
            		HashMap<String, HashSet<TermProcesado>> tablaAcordeon=new HashMap<String, HashSet<TermProcesado>>();
            		HashSet<TermProcesado> tablaListado=new HashSet<TermProcesado>();
            		
            		
            		
            		
            		
            		 try {
                		 JSONValue value = JSONParser.parseLenient(response.getText());
                    	 JSONArray authorObject = value.isArray();
                    	 for (int i = 0; i < authorObject.size(); i++) {
                    		JSONObject Termino1 = authorObject.get(i).isObject();
                    		JSONArray JA= Termino1.get("SemanticasExt").isArray();
                    		String Termino=Termino1.get("Term").isString().stringValue();
                    		String CUI=Termino1.get("CUI").isString().stringValue();
                    		
                    		LinkedList<String> Semanticas=new LinkedList<String>();
                    		for (int j = 0; j < JA.size(); j++) {
                    			String seman=JA.get(j).isString().stringValue();
                    			Semanticas.add(seman);
                    			}
                    		
  
                    			
                    		
                    		TermProcesado T = new TermProcesado(Termino, new HashSet<Integer>());
                			T.setCUI(CUI);
                			T.setSemantica(Semanticas);
                			
                    		
                    		for (int j = 0; j < Semanticas.size(); j++) {
                    			String seman=Semanticas.get(j);
                    			HashSet<TermProcesado> Lista =tablaAcordeon.get(seman);
                    			if (Lista==null)
                    				Lista=new HashSet<>();
                    			
                    			Lista.add(T);
                    			tablaAcordeon.put(seman, Lista);
							}
                    		
                    		if (Semanticas.isEmpty())
                    		{
                    			String seman="#Manual#";
                    			HashSet<TermProcesado> Lista =tablaAcordeon.get(seman);
                    			if (Lista==null)
                    				Lista=new HashSet<>();
                    			
                    			Lista.add(T);
                    			tablaAcordeon.put(seman, Lista);
                    		}
                    		
                    		tablaListado.add(T);
                    		
//                    		Window.alert("Termino ->"+T.getTerm());
                    	 }
                    	 
                    	 
                    	 
                    	 
					} catch (Exception e) {
						e.printStackTrace();
						Window.alert("Error ->"+e.getMessage());
					}
            		
            		
//            		 for (Entry<String, List<TermProcesado>> doc_terms_auto : Estado.getDoc_Words_State_AUTO().entrySet()) {
//             			for (TermProcesado temino : doc_terms_auto.getValue()) {
//             				List<String> seman=temino.getSemantica();
//             				if (seman==null||seman.isEmpty())
//             					{
//             					seman=new LinkedList<String>();
//             					seman.add("#");
//             					}
//             				for (String semanterm : seman) {
//             					HashSet<TermProcesado> lista = tablaAcordeon.get(semanterm);
//             					if (lista==null)
//             						lista=new HashSet<TermProcesado>();
//             					lista.add(temino);
//             					tablaAcordeon.put(semanterm, lista);
//             				}
//             				
//             				tablaListado.add(temino);
//             				
//             				
//             			}
//             		}
            		 
            		 
//                	Window.alert("Lista ->"+response.getText());
                	
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
            		 
            		 
            		//PanelAlphabet
            			
            			HashMap<String, TermProcesado> tablaTexto_valorAlpha=new HashMap<String, TermProcesado>();
            			for (TermProcesado termProcesado : tablaListado)
            				tablaTexto_valorAlpha.put(termProcesado.getTerm(), termProcesado);
            			
            			LinkedList<String> ListaAlpha = new LinkedList<String>(tablaTexto_valorAlpha.keySet());
            			
            			HashMap<String, String> ListaMayusculas=new HashMap<String, String>();
            			for (String namemini : ListaAlpha) 
            				ListaMayusculas.put(new String(namemini).toUpperCase(), namemini);
						
            			LinkedList<String> ListaAlpha2=new LinkedList<String>(ListaMayusculas.keySet());
            			
            			Collections.sort(ListaAlpha2);
            			
            			Grid gA = new Grid(ListaAlpha2.size(), 2);
            			
            			gA.setWidth("100%");
            			for (int j = 0; j < ListaAlpha2.size(); j++) {
            				String termname = ListaMayusculas.get(ListaAlpha2.get(j));
            				TermProcesado termasoc = tablaTexto_valorAlpha.get(termname);
            				gA.setWidget(j, 0, new LabelUMLS(termasoc.getTerm(),termasoc.getCUI()));
            				
            				HorizontalPanel hPanel = new HorizontalPanel();
            				
            				PushButton RecoverGlobal = new PushButtonUMLSImport(termasoc.getTerm(),termasoc.getCUI(),Yo);
            				hPanel.add(RecoverGlobal);
            				hPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
            				
            				gA.setWidget(j, 1, hPanel);
            				
            			}
            			
            			PanelAlphabetOrder.add(gA);
            		 
            		 
            			//PAnelSemantica
            			 StackPanel panel = new StackPanel();
            			 panel.setWidth("100%");
            			 
            			 LinkedList<String> ordenar=new LinkedList<String>(tablaAcordeon.keySet());
            			 Collections.sort(ordenar);
            			 
            			 for (int i = 0; i < ordenar.size(); i++) {
            				String termSeman = ordenar.get(i);
            				HashSet<TermProcesado> ListaDesordenada = tablaAcordeon.get(termSeman);
            				
            				HashMap<String, TermProcesado> tablaTexto_valor=new HashMap<String, TermProcesado>();
            				for (TermProcesado termProcesado : ListaDesordenada)
            					tablaTexto_valor.put(termProcesado.getTerm(), termProcesado);
            				
            				
            				
            				LinkedList<String> Lista = new LinkedList<String>(tablaTexto_valor.keySet());

            				HashMap<String, String> ListaMayusculasTabla=new HashMap<String, String>();
                			for (String namemini : Lista) 
                				ListaMayusculasTabla.put(new String(namemini).toUpperCase(), namemini);
    						
                			LinkedList<String> Lista2=new LinkedList<String>(ListaMayusculasTabla.keySet());
                			
                			Collections.sort(Lista2);
            			
            				Grid g = new Grid(Lista2.size(), 2);
            				g.setWidth("100%");
            				for (int j = 0; j < Lista2.size(); j++) {
            					String termname = ListaMayusculasTabla.get(Lista2.get(j));
            					TermProcesado termasoc = tablaTexto_valor.get(termname);
            					g.setWidget(j, 0, new LabelUMLS(termasoc.getTerm(),termasoc.getCUI()));
            					
            					HorizontalPanel hPanel = new HorizontalPanel();
            					
            					PushButton RecoverGlobal = new PushButtonUMLSImport(termasoc.getTerm(),termasoc.getCUI(),Yo);
            					hPanel.add(RecoverGlobal);
            					hPanel.setHorizontalAlignment(HasHorizontalAlignment.ALIGN_RIGHT);
            					
            					g.setWidget(j, 1, hPanel);
            					
            				}
            				
            				ScrollPanel SPI=new ScrollPanel();
            				SPI.setSize("100%", "100px");
            				
            				SPI.setWidget(g);
            				
            				panel.add(SPI, termSeman);
            			}
            			 
            			
            			    
            			    PanelSemantycOrder.add(panel);
            			    
            			    
            			    
            			    //AQUI
            			    Fixed.add(PanelSemantycOrder);
            		 
            		 
            		 
            		 
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
			
			OperationalValueTypeJSON SourceAutoBienAqui=null;
			
			for (OperationalValueTypeJSON OperaValTyJSON : termelem.getShows()) {
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")
					&&OperaValTyJSON.getName().toLowerCase().equals("source")
					&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
						SourceAutoBienAqui=OperaValTyJSON;
			}
			
			
			boolean AutoCorrecto = true;
			for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
				if ((SourceAutoBienAqui!=null)&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
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
					
					//TODO FALTA LA CONDICION DEL GENERAKL Parece reparado
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
			
			OperationalValueTypeJSON SourceAutoBienAqui=null;
			
			for (OperationalValueTypeJSON OperaValTyJSON : termelem.getShows()) {
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")
					&&OperaValTyJSON.getName().toLowerCase().equals("source")
					&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
						SourceAutoBienAqui=OperaValTyJSON;
			}
			
			boolean AutoCorrecto = true;
			for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
				if ((SourceAutoBienAqui!=null)&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
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
			
			OperationalValueTypeJSON SourceAutoBienAqui=null;
			
			for (OperationalValueTypeJSON OperaValTyJSON : termelem.getShows()) {
			if (OperaValTyJSON.getView().toLowerCase().equals("proto")
					&&OperaValTyJSON.getName().toLowerCase().equals("source")
					&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
						SourceAutoBienAqui=OperaValTyJSON;
			}
			
			
			boolean AutoCorrecto = true;
			for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
				if (SourceAutoBienAqui!=null&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
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
					
					//TODO FALTA LA CONDICION DEL GENERAKL parece reparado
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
				
				OperationalValueTypeJSON SourceAutoBienAqui=null;
				
				for (OperationalValueTypeJSON OperaValTyJSON : termelem.getShows()) {
				if (OperaValTyJSON.getView().toLowerCase().equals("proto")
						&&OperaValTyJSON.getName().toLowerCase().equals("source")
						&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
							SourceAutoBienAqui=OperaValTyJSON;
				}
				
				for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
					
					if ( (SourceAutoBienAqui!=null)&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
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
						
						//TODO FALTA LA CONDICION DEL GENERAKL parece reparado
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
		
		//TODO AQUI CADA UNO DEBE SER DIFERENTE
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
            
            JSONArray jsonSeman=new JSONArray();
            
            for (int j = 0; j < termProcesado.getSemantica().size(); j++) {
				String jsonObject = termProcesado.getSemantica().get(j);
				jsonSeman.set(j, new JSONString(jsonObject));
			}
            
            jsonAuthor.put("Semanticas", jsonSeman);
            
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
	            	  {
	            	  //console(response.getText());
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







	private List<TermProcesado> getTermsUsed() {
		
		HashSet<String> remglob = getglobaldelete();

		HashMap<String, TermProcesado> autoTerm = new HashMap<String,TermProcesado>();
		
		List<TermProcesado> ProcesarLimpio=new LinkedList<TermProcesado>();
		HashMap<TermProcesado, StructureJSON> Term_St=new HashMap<TermProcesado, StructureJSON>();
		
		for (StructureJSON termelem : TermElements) {
			
			if (!termelem.getValue().trim().isEmpty())
			{
				
				OperationalValueTypeJSON SourceAutoBienAqui=null;
				
				for (OperationalValueTypeJSON OperaValTyJSON : termelem.getShows()) {
				if (OperaValTyJSON.getView().toLowerCase().equals("proto")
						&&OperaValTyJSON.getName().toLowerCase().equals("source")
						&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
							SourceAutoBienAqui=OperaValTyJSON;
				}
				
				boolean AutoCorrecto = true;
				for (OperationalValueJSON termProcesado : termelem.getOperationalValues()) {
					if (SourceAutoBienAqui!=null&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId())&&!termProcesado.getValue().toLowerCase().equals("auto"))
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
		return WaitingUpdate;
	}


//	@Override
	public boolean updateContext() {
		return false;
	}


//	@Override
	public void setWaitingUpdate(boolean update) {
		
		
		String SDocumentoS =getVariableBaseJSONOBJS(RandomIdVars);
			
		JSONObject JSOSucion = (JSONObject) JSONParser.parseStrict(SDocumentoS);

		Documento=CreateJSONObject.create(JSOSucion);
		
		GWT.log(Documento.getDocumento().getId()+"");
		
		
		if (EsperandoPosicion!=null&&!update)
		{
			//AQUI EMPEZAMOS
			
			
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
				PanelPrincipal.add(T4);
			}else
				{
				
				console("1:"+SS.getName());
		
			test(SS);
			
			LinkedList<StructureJSON> elementos_validos=getTermElements();	
			
          	 
          	 StructureJSON valido=null;
      
          	 List<String> ListaDeAnteriores=new LinkedList<>();
          	 
          	 for (StructureJSON structureJSON : elementos_validos) {
					if (structureJSON.getValue()==null||structureJSON.getValue().trim().isEmpty())
						if (valido==null){
							valido=structureJSON;
						}else;			
					else if (structureJSON.getValue()!=null&&!structureJSON.getValue().trim().isEmpty())
						ListaDeAnteriores.add(structureJSON.getValue().trim());
						
				}
          	 
          	GWT.log("PN -Z "+EsperandoPosicion.getPosicionesQueNecesito());
	
			List<StructureJSON> PositionS=getTermino_Posicion().get(valido);
			 StructureJSON DeleteS=getTermino_Delete().get(valido);
			
			 if (PositionS.size()<EsperandoPosicion.getPosicionesQueNecesito().size())
			{
				 Long idPositionClone=PositionS.get(0).getClaseOf();
//				 	if (idPositionClone==null)
				 		idPositionClone=PositionS.get(0).getId().get(0);
				 	
					createIterator(Long.toString(idPositionClone),Long.toString(Documento.getDocumento().getId()),"proto",false);
				 
			}
			 else
				 EsperandoPosicion.crea(valido,PositionS,DeleteS);
			 
				}
			
		}else
			WaitingUpdate=update;
		
		
//		if (TC!=null&&!update)
//		{
//			
//		
//			
//			StructureJSON S=null;
//			for (GrammarJSON gramarpos : Documento.getGramatica()) {
//				S=gotContext(gramarpos.getListaS(),ContextId);
//				
//				if (S!=null)
//					{
//					
//				
//				if (!S.getClaseOf().equals(ContextId))
//					{
//					S=gotContext(gramarpos.getListaS(),S.getClaseOf());				
//					ContextId=S.getClaseOf();
//					ContextId=S.getClaseOf();
//					}
//				
//				
//				
//					break;
//					}
//				
//			}
//				
//				
//				HashData=new HashMap<StructureJSON, HashMap<StructureJSON,HashMap<StructureJSON,HashMap<String, StructureJSON>>>>();
//
//				
//				List<StructureJSON> S2 = null;
//				for (GrammarJSON gramarpos : Documento.getGramatica()) {
//					S2=gotMultivaluedContext(gramarpos.getListaS(),ContextId);
//					if (S2!=null)
//						break;
//				}
//				
//				if (S2==null)
//					{
//					setError(ERROR_STRUCTURE);
//					return;
//					}
//				
//				for (StructureJSON punto : S2)
//					procesaPoint(punto);
//				
//				
//			lista=new ArrayList<StructureJSON>(HashData.keySet());
//			refreshpage();
//			
//			
//			
//			HashMap<StructureJSON, HashMap<StructureJSON, HashMap<String, StructureJSON>>> TablaHoja = HashData.get(EE);
//			for (Entry<StructureJSON, HashMap<StructureJSON, HashMap<String, StructureJSON>>> elementoClave : TablaHoja.entrySet()) {
//				if (elementoClave.getKey().getValue()!=null&&elementoClave.getKey().getValue().isEmpty())
//				{
//					int necesario = TC.getTextSelector().size();
//					int actual= elementoClave.getValue().keySet().size();
//					if (necesario>actual)
//						{
//						
//							createIterator(Long.toString(elementoClave.getValue().entrySet().iterator().next().getKey().getId().get(0)),Long.toString(Documento.getDocumento().getId()),"proto",false);
//
////							ControladorEditor.createIteration(Long.toString(elementoClave.getValue().entrySet().iterator().next().getKey().getId().get(0)),Long.toString(Documento.getDocumento().getId()),"anote",false);
//							break;
//						}
//					else
//					{
//						TC.setLista(elementoClave.getKey(),elementoClave.getValue());					
//						WaitingUpdate=update;
//						break;
//					}
//				}
//			}
//			
//			
//				
//			
//			
//		}
//		else
//			WaitingUpdate=update;
	}


	public static native void console(String text)
	/*-{
	    console.log(text);
	}-*/;






	public void RefreshStatus() {
		//TODO SUPER IMPORTANTE POR AHORA

		processActualDocument();
		
	}


	
	private static native String createIterator(String contextId, String documentId, String Editor, boolean isgrammar) /*-{
	return window.parent.createIterator(contextId,documentId,Editor,isgrammar);
	}-*/;

public LinkedList<StructureJSON> getTermElements() {
	return TermElements;
}

public HashMap<StructureJSON, List<StructureJSON>> getTermino_Posicion() {
	return Termino_Posicion;
}

public HashMap<StructureJSON, List<StructureJSON>> getTermino_Seman() {
	return Termino_Seman;
}

public HashMap<StructureJSON, StructureJSON> getTermino_CUI() {
	return Termino_CUI;
}


public HashMap<StructureJSON, StructureJSON> getTermino_Delete() {
	return Termino_Delete;
}

public HashMap<Integer, Label> getPosicionTablaI() {
	return posicionTablaI;
}



	public Long getCollectionNumber() {
		return CollectioNumber;
	}
}
