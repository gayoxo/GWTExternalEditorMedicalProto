/**
 * 
 */
package ucm.fdi.ilsa.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;

/**
 * @author Joaquin Gayoso-Cabada
 *
 */
public interface LupaHTNL extends ClientBundle {
	public static final LupaHTNL INSTANCE = GWT.create(LupaHTNL.class);
	
	@Source("lupa1.txt")
	 public TextResource getIntroHtml();
	
	@Source("lupa2.txt")
	 public TextResource getIntroHtml2();
}
