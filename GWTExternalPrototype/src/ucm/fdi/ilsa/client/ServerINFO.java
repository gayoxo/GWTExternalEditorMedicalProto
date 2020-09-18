package ucm.fdi.ilsa.client;

import com.google.gwt.user.client.Window;

public class ServerINFO {

	private static final String ServerURI = "http://clavy.fdi.ucm.es/";

	
	public static String getServeruri() {
		
		if (Window.Location.getHost().startsWith("localhost"))
			{
			console("localhost");
			return "http://localhost:8080/";
			}
		console("no localhost"+Window.Location.getHost());
		return ServerURI;
	}
	
	public static native void alert(String msg) /*-{
	  $wnd.alert(msg);
	}-*/;
	
	public static native void console(String text)
	/*-{
	    console.log(text);
	}-*/;
}
