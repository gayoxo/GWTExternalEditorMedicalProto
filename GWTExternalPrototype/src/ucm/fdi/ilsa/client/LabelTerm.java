package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
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
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;

//import ucm.fdi.ilsa.prototype.shared.TermInfo;
//import ucm.fdi.ilsa.prototype.shared.TermProcesado;

public class LabelTerm extends Label {

	private TermProcesado Termio;
	private LinkedList<Label> ActualTMPSelected;
	private CompositeDocumentEditionProto ActualSelected;
//	private final static MedicalPrototypeServiceAsync medialService = GWT.create(MedicalPrototypeService.class);

	public LabelTerm(TermProcesado termProcc, CompositeDocumentEditionProto medicalPrototipeILSAMain) {
		super(termProcc.getTerm());
		Termio=termProcc;
		ActualSelected=medicalPrototipeILSAMain;
		ActualTMPSelected=new LinkedList<Label>();
		
		HashMap<Integer, Label> lista=ActualSelected.getLabelsByPos();
		for (Integer posi : Termio.getPosiciones()) {
			Label sele=lista.get(posi);
			if (sele!=null)
				ActualTMPSelected.add(sele);
		}
		
		addMouseOverHandler(new MouseOverHandler() {
			
			@Override
			public void onMouseOver(MouseOverEvent arg0) {
				for (Label widget : ActualSelected.getActualSelected()) 
					widget.removeStyleName("selectedLab");

				for (Label label : ActualTMPSelected)
					label.addStyleName("selectedLabMarked");
				
				
			}
		});
		
		addMouseOutHandler(new MouseOutHandler() {
			
			@Override
			public void onMouseOut(MouseOutEvent arg0) {
				for (Label label : ActualTMPSelected) 
					label.removeStyleName("selectedLabMarked");
				
				for (Label widget : ActualSelected.getActualSelected()) 
					widget.addStyleName("selectedLab");
				
			}
		});
		
		StringBuffer SBTitle=new StringBuffer();
		
		for (int i = 0; i < Termio.getSemantica().size(); i++) {
			String label = Termio.getSemantica().get(i);
			SBTitle.append(label);
			if (i < Termio.getSemantica().size()-1)
				SBTitle.append("\n");
		}
		
		addMouseOverHandler(new MouseOverHandler() {
			
			@Override
			public void onMouseOver(MouseOverEvent arg0) {
				for (Label widget : ActualSelected.getActualSelected()) 
					widget.removeStyleName("selectedLab");

				for (Label label : ActualTMPSelected)
					label.addStyleName("selectedLabMarked");
				
				
			}
		});
		
		setTitle(SBTitle.toString());
		
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {

			//	http://localhost:8080/ProtoEditorService/service/UMLSDesc?q=C0004144
				
				if (Termio.getCUI()!=null&&!Termio.getCUI().isEmpty())
				{
				RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/UMLSDesc?q="+Termio.getCUI());
				
				try {
			        builder.sendRequest(null, new RequestCallback() {
			            public void onError(Request request, Throwable exception) {
			            	 Window.alert("Error ->"+exception.getMessage());
			            }

			            public void onResponseReceived(Request request, Response response) {
			                if (response.getStatusCode()!=0&&response.getStatusCode()==200)
			                	{
			                	
			                	TermInfo TF=new TermInfo();
			                	
			                	ArrayList<String> Semanticas=new ArrayList<String>();
			                	HashMap<String, String> Descripciones=new HashMap<String, String>();
			                	//TODO AQUI
			                	 try {
			                		 JSONValue value = JSONParser.parseLenient(response.getText());
			                    	 JSONObject authorObject = value.isObject();
			                    	 JSONArray seman=authorObject.get("SemanticTypes").isArray();
			                    	 for (int i = 0; i < seman.size(); i++) {
			                    		 String Texto=seman.get(i).isString().stringValue();
			                    		 if (!Texto.trim().isEmpty())
			                    			 Semanticas.add(Texto.trim());
			                    	 }
			                    	 JSONObject desc=authorObject.get("Descripciones").isObject();
			                    	 for (String keyname : desc.keySet()) {
			                    		 String Texto=desc.get(keyname).isString().stringValue();
			                    		 if (!Texto.trim().isEmpty())
			                    			 Descripciones.put(keyname,Texto.trim());
									}
			                    	 
			                    	 
								} catch (Exception e) {
									e.printStackTrace();
									Window.alert("Error ->"+e.getMessage());
								}
			                	
			                	 TF.setSemanticTypes(Semanticas);
			                	 TF.setDescripciones(Descripciones);
			                	 
			                	PopupPanel DB=new DialogBoxCUI(TF);
								DB.center();
			                	
			                	 
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
				
				
//				Window.alert("llamada a servicio externo UMLS ->"+Termio.getCUI() );
//				if (Termio.getCUI()!=null&&!Termio.getCUI().isEmpty())
//				{
//				LoadingPopupPanel.getInstance().setLabelTexto(
//						StringConstants.getInstance().get("Loading"));
//				LoadingPopupPanel.getInstance().center();
//				medialService.getTermInfo(Termio.getCUI(), new AsyncCallback<TermInfo>() {
//					
//					@Override
//					public void onSuccess(TermInfo arg0) {
//						LoadingPopupPanel.getInstance().hide();
//						DialogBox DB=new DialogBoxCUI(arg0);
//						DB.center();
//						
//					}
//					
//					@Override
//					public void onFailure(Throwable arg0) {
//						LoadingPopupPanel.getInstance().hide();
//						Window.alert(arg0.getMessage());
//					}
//				});
				
//				}
			}
			}
		});
	}
	
	public TermProcesado getTermio() {
		return Termio;
	}

}
