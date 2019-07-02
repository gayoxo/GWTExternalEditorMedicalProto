package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.HashMap;
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
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;


public class PushButtonUMLSImport extends PushButton {

	private CompositeDocumentEditionProto PanelPrincipal;
	private String Name;
	private String CUI;

	public PushButtonUMLSImport(String name, String valor, CompositeDocumentEditionProto panelPrincipal) {
		super(new Image("img/import.png"));
		PanelPrincipal=panelPrincipal;
		Name=name;
		CUI=valor;
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				
				if (CUI!=null&&!CUI.isEmpty())
				{
				RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.ServerURI+"ProtoEditorService/service/UMLSDesc?q="+CUI);
				
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
			                	 
			                	 

									
//									boolean found=false;
//									for (TermProcesado termino : actuales) {
//										if (termino.getTerm().equals(Name.trim()))
//										{
//										found=true;
//										break;
//										}
//									}
//									
//									if (found)
//										Window.alert(StringConstants.getInstance().get("termexist"));
//									else
//									{
//									
//										HashSet<Integer> INteLis=new HashSet<Integer>();
//										
//										for (Label labe : PanelPrincipal.getActualSelected()) {
//											Integer a = PanelPrincipal.getPosicionTabla().get(labe);
//											if (a!=null)
//												INteLis.add(a);
//										}	
//										
//										if (INteLis.isEmpty())
//											Window.alert(StringConstants.getInstance().get("selectionempty"));
//										else
//										{
//									TermProcesado Nuevo=new TermProcesado(Name, INteLis);
//									Nuevo.setCUI(CUI);
//									Nuevo.setSemantica(arg0);
//									actuales.add(Nuevo);
//										}
//									}
			                	 
			                	 Window.alert("Nuevo ->"+Name);
			                	
			                	 
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
				
				
//				LoadingPopupPanel.getInstance().setLabelTexto(
//						StringConstants.getInstance().get("Loading"));
//				LoadingPopupPanel.getInstance().center();
//				
//				
//				medialService.getTermSemanticas(CUI, new AsyncCallback<List<String>>() {
//					
//					@Override
//					public void onSuccess(List<String> arg0) {
//						LoadingPopupPanel.getInstance().hide();
//						String DocumenA = PanelPrincipal.getEstado().getPorRevisar().get(PanelPrincipal.getActualDocument());
//						List<TermProcesado> actuales = PanelPrincipal.getEstado().getDoc_Words_State_Add().get(DocumenA);
//						if (actuales==null)
//							actuales=new LinkedList<TermProcesado>();
//						
//						
//						
//						boolean found=false;
//						for (TermProcesado termino : actuales) {
//							if (termino.getTerm().equals(Name.trim()))
//							{
//							found=true;
//							break;
//							}
//						}
//						
//						if (found)
//							Window.alert(StringConstants.getInstance().get("termexist"));
//						else
//						{
//						
//							HashSet<Integer> INteLis=new HashSet<Integer>();
//							
//							for (Label labe : PanelPrincipal.getActualSelected()) {
//								Integer a = PanelPrincipal.getPosicionTabla().get(labe);
//								if (a!=null)
//									INteLis.add(a);
//							}	
//							
//							if (INteLis.isEmpty())
//								Window.alert(StringConstants.getInstance().get("selectionempty"));
//							else
//							{
//						TermProcesado Nuevo=new TermProcesado(Name, INteLis);
//						Nuevo.setCUI(CUI);
//						Nuevo.setSemantica(arg0);
//						actuales.add(Nuevo);
//						PanelPrincipal.getEstado().getDoc_Words_State_Add().put(DocumenA,actuales);
//						PanelPrincipal.RefreshStatus();
//							}
//						
//						
//						
//						
//						}
//					}
//					
//					@Override
//					public void onFailure(Throwable arg0) {
//						LoadingPopupPanel.getInstance().hide();
//						Window.alert(arg0.getMessage());
//					}
//				});
				
				
				
				
			}
		});
	}

}
