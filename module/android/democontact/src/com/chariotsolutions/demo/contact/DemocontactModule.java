/**
 * This file was auto-generated by the Titanium Module SDK helper for Android
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2010 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 */
package com.chariotsolutions.demo.contact;

import org.appcelerator.kroll.KrollModule;
import org.appcelerator.kroll.annotations.Kroll;
import org.appcelerator.titanium.TiContext;
import org.appcelerator.titanium.util.TiConfig;

@Kroll.module(name="Democontact", id="com.chariotsolutions.demo.contact")
public class DemocontactModule extends KrollModule
{

	// Standard Debugging variables
	private static final String LCAT = "DemocontactModule";
	private static final boolean DBG = TiConfig.LOGD;
	private TiContext tiContext;

	// You can define constants with @Kroll.constant, for example:
	// @Kroll.constant public static final String EXTERNAL_NAME = value;
	
	public DemocontactModule(TiContext tiContext) {
		super(tiContext);
		this.tiContext = tiContext;
	}
}