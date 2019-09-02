package ucm.fdi.ilsa.client;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

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
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PushButton;

import fdi.ucm.server.interconect.model.OperationalValueJSON;
import fdi.ucm.server.interconect.model.OperationalValueTypeJSON;
import fdi.ucm.server.interconect.model.StructureJSON;


public class PushButtonUMLSImport extends PushButton {

	private CompositeDocumentEditionProto PanelPrincipal;
	private String Name;
	private String CUI;

	public PushButtonUMLSImport(String name, String valor, CompositeDocumentEditionProto panelPrincipal) {
		super(new Image("Proto/import.png"));
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
			                	ArrayList<String> SemanticasRec=new ArrayList<String>();
			                	
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
			                    		 
			                    		 
			                    		 JSONArray semanRec=authorObject.get("SemanticTypesRec").isArray();
				                    	 for (int i = 0; i < semanRec.size(); i++) {
				                    		 String Texto2=semanRec.get(i).isString().stringValue();
				                    		 if (!Texto2.trim().isEmpty())
				                    			 SemanticasRec.add(Texto2.trim());
				                    	 }	 
									}
			                    	 
			                    	 
								} catch (Exception e) {
									e.printStackTrace();
									Window.alert("Error ->"+e.getMessage());
								}
			                	
			                	 TF.setSemanticTypes(Semanticas);
			                	 TF.setDescripciones(Descripciones);
			                	 
			                	 

			                	 LinkedList<StructureJSON> elementos_validos=PanelPrincipal.getTermElements();	
			                	 
			                	 StructureJSON valido=null;
			            
			                	 List<String> ListaDeAnteriores=new LinkedList<>();
			                	 
			                	 for (StructureJSON structureJSON : elementos_validos) {
									if (structureJSON.getValue()==null||structureJSON.getValue().trim().isEmpty())
										valido=structureJSON;
									else if (structureJSON.getValue()!=null&&!structureJSON.getValue().trim().isEmpty())
										ListaDeAnteriores.add(structureJSON.getValue().trim());
										
								}
			                	 
			                	 
			                	 if (valido!=null)
			                	 	{        
			                		 

			                		 StructureJSON CUIS=PanelPrincipal.getTermino_CUI().get(valido);
			                		 StructureJSON DeleteS=PanelPrincipal.getTermino_Delete().get(valido);
			                		 List<StructureJSON> PositionS=PanelPrincipal.getTermino_Posicion().get(valido);
			                		 List<StructureJSON> SemanS=PanelPrincipal.getTermino_Seman().get(valido);
			                		 
			                		 boolean error=false;
			                		 
			                		 List<Integer> listaPosiciones=new LinkedList<Integer>();

			                			 LinkedList<Label> SelectedT = PanelPrincipal.getActualSelected();
			                		
			                			 if (!SelectedT.isEmpty())
			                				 for (Label label : SelectedT) {
												Integer PosicionLabel=PanelPrincipal.getPosicionTabla().get(label);
												if (PosicionLabel!=null)
													listaPosiciones.add(new Integer(PosicionLabel+1));
											
											}
			                				 
			                				 if (listaPosiciones.isEmpty())
			                					 {
			                					 Window.alert(StringConstants.getInstance().get("selectionempty"));
			                					 error=true;
			                					 }
			                		 	
			                	 
			                		for (String label : ListaDeAnteriores) {
										if (label.toLowerCase().equals(Name.trim().toLowerCase()))
		                					 {
		                					 Window.alert(StringConstants.getInstance().get("termexist"));
		                					 error=true;
		                					 break;
		                					 }
									}

//			                				 Window.alert(listaPosiciones.size()+"");
			                		 
			                		 
			                		 if (!error)
			                		 
			                		 {
			                			 valido.setValue(Name.trim());
			                			 
			                			
			                		 
			                		 if (CUIS!=null)
			                			 CUIS.setValue(CUI);
			                		 
			                		 if (DeleteS!=null)
			                			 DeleteS.setSelectedValue(false);
			                		 
			                		 
			                		 if (PositionS!=null)
			                		 	{
			                			 
			                			 if (PositionS.size()<listaPosiciones.size())
			                				 Window.alert("Ampliar Posiciones");
			                			 //TODO hay que ampliar casi seguro

			                			 for (int i = 0; i < PositionS.size(); i++) 
			                				 if (listaPosiciones.size()>i)
			                					 PositionS.get(i).setValue(Integer.toString(listaPosiciones.get(i)));
											
										
		
			                		 	}
			                		 
			                		 if (SemanS!=null)
			                		 	{
			                			 
			                			 if (SemanS.size()<SemanticasRec.size())
			                				 Window.alert("Ampliar Semanticas");
			                			 //TODO hay que ampliar casi seguro

//			                			 Window.alert(SemanS.size()+"");
//			                			 
//			                			 Window.alert(SemanticasRec.size()+"");
			                			 
			                			 for (int i = 0; i < SemanS.size(); i++) 
			                				 if (SemanticasRec.size()>i)
			                					 SemanS.get(i).setValue(SemanticasRec.get(i));
											
										
		
			                		 	}
			                		 
			                		 
			                		 
			                    		OperationalValueTypeJSON SourceAutoBienAqui=null;
			             			
			             			for (OperationalValueTypeJSON OperaValTyJSON : valido.getShows()) {
			             			if (OperaValTyJSON.getView().toLowerCase().equals("proto")
			             					&&OperaValTyJSON.getName().toLowerCase().equals("source")
			             					&&OperaValTyJSON.getDefault().toLowerCase().equals("auto"))
			             						SourceAutoBienAqui=OperaValTyJSON;
			             			} 
			                    		 
			                    		for (OperationalValueJSON termProcesado : valido.getOperationalValues()) {
			              				if ((SourceAutoBienAqui!=null)&&SourceAutoBienAqui.getId().contains(termProcesado.getOperationalValueTypeId()))
			              					termProcesado.setValue("manual");
			              			}
			                		 
			                		 
//			                		 for (OperationalValueJSON termProcesado : valido.getOperationalValues()) {
//			             				if (PanelPrincipal.getSourceAutoBien().getId().contains(termProcesado.getOperationalValueTypeId()))
//			             					termProcesado.setValue("manual");
//			             			}
			                		 
//			                		 Window.alert("Hola3");
			                		 PanelPrincipal.RefreshStatus();
			                		
			                		 
			                		 }

			                		 
			                	 	}
			                	 else {
			                		 //TODO GENERAR NUEVO ELEMENTO
			                		 Window.alert("Generar Nuevo ->"+Name);
			                	 }
			                		 
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
