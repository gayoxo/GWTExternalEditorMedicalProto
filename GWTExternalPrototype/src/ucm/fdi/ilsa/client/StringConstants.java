package ucm.fdi.ilsa.client;

import java.util.HashMap;

public class StringConstants {

	private static StringConstants singletonImp; 
	
	HashMap<String, String> id_valorS;
	
	public StringConstants() {
		id_valorS=new HashMap<String, String>();
		
		id_valorS.put("loading", "LOADING...");
		id_valorS.put("userlogin", "User: ");
		id_valorS.put("passwordlogin", "Password: ");
		id_valorS.put("buttonlogin","Login");
		id_valorS.put("archivomenu", "File");
		id_valorS.put("save", "Save");
		id_valorS.put("documentfindings", "Document Findings Text: ");
		id_valorS.put("cannotbeempty", "Text cannot be empty ");
		id_valorS.put("termexist", "Term already exist in the document");
		id_valorS.put("close", "Close");
		id_valorS.put("selectionempty", "Selection of words is empty");
		id_valorS.put("disableglobal", "Press to disable this term in the collection");	
		id_valorS.put("disablelocal", "Press to disable this term in the report");	
		id_valorS.put("edittit", "Press to edit this term in the report");	
		id_valorS.put("deletelabel", "Delete Document");	
		id_valorS.put("recoverlabel", "Recover Document");	
		id_valorS.put("deletelabeldocument", "///Document Deleted");	
		id_valorS.put("tools", "Tools");
		id_valorS.put("refreshkey", "Refresh Key");	
		id_valorS.put("idprefix", "ID-> ");	
		id_valorS.put("review", "Review");
		id_valorS.put("reviewbegin", "Review from the Beginning");
		id_valorS.put("gotobegin", "Goto Start");
		id_valorS.put("gotoend", "Goto End");
		id_valorS.put("generainformes", "Generate Summaries");
		id_valorS.put("clicklinkdocument", "Click on the link to download the summary document");
		id_valorS.put("clicklinkvocabulary", "Click on the link to download the vocabulary document");
		id_valorS.put("active", "Active");
		id_valorS.put("inactive", "Inactive");
	}
	
	public static StringConstants getInstance() {
		if (singletonImp==null)
			singletonImp=new StringConstants();
		return singletonImp;
	}



	public String get(String entrada) {
		if (id_valorS.get(entrada.toLowerCase())!=null)
			return id_valorS.get(entrada.toLowerCase());
		else
			return "...";
	}	

	
	public void funciontest(){
//		new RequestBuilder(RequestBuilder.GET, "path/to/file.txt").sendRequest("", new RequestCallback() {
//			  @Override
//			  public void onResponseReceived(Request req, Response resp) {
//			    String text = resp.getText();
//			    // do stuff with the text
//			  }
//
//			  @Override
//			  public void onError(Request res, Throwable throwable) {
//			    // handle errors
//			  }
//			});
		
	}
}
