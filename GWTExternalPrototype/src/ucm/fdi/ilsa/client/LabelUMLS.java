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
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.PopupPanel;


public class LabelUMLS extends Label {

	private String CUI;

	public LabelUMLS(String name, String cUI) {
		super(name);
		CUI=cUI;
		
		addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {

				if (CUI!=null&&!CUI.isEmpty())
				{
				RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, ServerINFO.getServeruri()+"ProtoEditorService/service/UMLSDesc?q="+CUI);
				
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
				}
			}
		});
		
	}

}
