package com.angular.app.user;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping(value = "user")
public class UserController {

    private static final Logger logger = LoggerFactory
            .getLogger(UserController.class);

    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/register", method = {RequestMethod.GET})
    public String home(Locale locale, Model model, HttpServletRequest req) {
        logger.info("Welcome home! The client locale is {}.", locale);

        Date date = new Date();
        DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.LONG, locale);

        String formattedDate = dateFormat.format(date);

        model.addAttribute("serverTime", formattedDate);
        
        req.getServerPort();
        
        model.addAttribute("server_port", req.getServerPort());

        return "user/userregistration";
    }
    
    @RequestMapping(value = "/login", method = {RequestMethod.GET})
    public String login() {
    	
    	return "user/login";
    	
    }
}
