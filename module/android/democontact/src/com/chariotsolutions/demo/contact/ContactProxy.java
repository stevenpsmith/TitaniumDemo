package com.chariotsolutions.demo.contact;

import org.appcelerator.kroll.KrollDict;
import org.appcelerator.kroll.KrollProxy;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.titanium.TiContext;
import org.appcelerator.titanium.util.Log;
import org.appcelerator.titanium.util.TiConfig;

import android.content.ContentValues;
import android.net.Uri;
import android.provider.Contacts.People;

@Kroll.proxy(creatableInModule=DemocontactModule.class)
public class ContactProxy extends KrollProxy {
	
	// Standard Debugging variables
	private static final String LCAT = "ContactProxy";
	private static final boolean DBG = TiConfig.LOGD;
	private TiContext tiContext;
	private String firstName;
	private String lastName;
	private String note;
	
	public ContactProxy(TiContext tiContext) {
		super(tiContext);
		this.tiContext = tiContext;
	}
	
	@Override
	public void handleCreationDict(KrollDict options) {
		super.handleCreationDict(options);
		
		//we should be checking to make sure we have the appropriate values....but this is demo code :)
		firstName = (String)options.get("firstName");
		lastName = (String)options.get("lastName");
		note = (String)options.get("note");
		
		Log.d(LCAT, "contact first name: " + firstName);
		Log.d(LCAT, "contact last name: " + lastName);
		Log.d(LCAT, "contact note: " + note);
		saveContact();
	}
	
	private void saveContact(){
		ContentValues values = new ContentValues();
		values.put(People.NAME, firstName + " " + lastName);
		values.put(People.NOTES, note);
		// 1 = the new contact is added to favorites
		// 0 = the new contact is not added to favorites
		values.put(People.STARRED, 1);
		Uri uri = tiContext.getActivity().getContentResolver().insert(People.CONTENT_URI, values);
	}

}
