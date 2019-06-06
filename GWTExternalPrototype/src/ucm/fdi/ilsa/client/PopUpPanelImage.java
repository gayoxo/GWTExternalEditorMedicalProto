package ucm.fdi.ilsa.client;

import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.DockLayoutPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PopupPanel;

public class PopUpPanelImage extends PopupPanel {

	private String URLIMage;

	public PopUpPanelImage(String url) {
		super(false);
		setGlassEnabled(true);
		setModal(true);
		URLIMage=url;
		addStyleName("dialogCUI");
		
		
		DockLayoutPanel dockLayoutPanel = new DockLayoutPanel(Unit.PX);
		setWidget(dockLayoutPanel);
		
		
		Button Cerrar= new Button(StringConstants.getInstance().get("close"));
		HorizontalPanel PanelCerrar=new HorizontalPanel();
		PanelCerrar.add(Cerrar);
		
		Cerrar.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent arg0) {
				hide();
				
			}
		});
		
		dockLayoutPanel.addSouth(PanelCerrar, 30);
				
		Image Images=new Image(url);
		
		dockLayoutPanel.setSize((Images.getWidth()+305)+"px", (Images.getHeight()+35)+"px");
		dockLayoutPanel.addStyleName("dialog");
		
		
		String S = LupaHTNL.INSTANCE.getIntroHtml().getText();
		String S2 = LupaHTNL.INSTANCE.getIntroHtml2().getText();
		
		HTML Pagina=new HTML(S+URLIMage+S2);
		dockLayoutPanel.add(Pagina);
		
		
	}

	
	public static native void alert(String msg) /*-{
	  $wnd.imageZoom("myimage", "myresult");
	}-*/;
	
	@Override
	protected void onLoad() {
		alert("Hola");
		super.onLoad();
	}
}
