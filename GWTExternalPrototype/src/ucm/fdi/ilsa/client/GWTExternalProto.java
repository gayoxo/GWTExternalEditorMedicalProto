package ucm.fdi.ilsa.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;


/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class GWTExternalProto implements EntryPoint {
	
	private static CompositeDocumentEditionProto Actual;


	static {
        export();
    }
	
	public GWTExternalProto() {
		
	}
	
	
	/**
     * Makes our setData method accessible from plain JS
     */
    private static native void export() /*-{
    	
    	$wnd.ProtoSetContext = @ucm.fdi.ilsa.client.GWTExternalProto::setContext(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ZZZZ)
    	$wnd.ProtoGetIcon = @ucm.fdi.ilsa.client.GWTExternalProto::getIcon()
    	$wnd.ProtoPersist = @ucm.fdi.ilsa.client.GWTExternalProto::getPersist()
    	$wnd.ProtoisWaitingUpdate = @ucm.fdi.ilsa.client.GWTExternalProto::isWaitingUpdate()
    	$wnd.ProtoupdateContext = @ucm.fdi.ilsa.client.GWTExternalProto::updateContext()
    	$wnd.ProtosetWaitingUpdate =  @ucm.fdi.ilsa.client.GWTExternalProto::setWaitingUpdate(Z)
    	
    }-*/;

    public static void setContext(String IdVentana,String contextId,String Height,boolean isgrammar,boolean edit,boolean views,boolean CompleteView) {
//		try {
			Long contLong=Long.parseLong(contextId);
			Integer heiInteger=Integer.parseInt(Height);
			if (edit)
				Actual=new CompositeDocumentEditionProto(IdVentana, contLong, heiInteger, isgrammar);
			else
				Actual=new CompositeDocumentDescriptionProto(IdVentana, contLong, heiInteger, CompleteView, isgrammar, views);
//		} catch (Exception e) {
//			Window.alert(e.getMessage());
//			Window.
//			e.printStackTrace();
//		}
		
		
	}
    
    public static String getIcon() {
    	return CompositeDocumentDescriptionProto.getIcon();
		
		
	}
    
    public static void getPersist() {
    	if (Actual!=null)
    		Actual.persistJS();
		
		
	}
    
    public static boolean isWaitingUpdate() {
    	return false;
		
		
	}
    
    public static boolean updateContext() {
    	return true;
		
		
	}
    
    public static void setWaitingUpdate(boolean update) {
    	//NOTHIG TO DO
    }


	@Override
	public void onModuleLoad() {
		GWT.log("Proto Load");
		
	}
}
