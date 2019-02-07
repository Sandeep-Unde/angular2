package com.angular.app.welcome;

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
public class HelloController {

    private static final Logger logger = LoggerFactory
            .getLogger(HelloController.class);

    /**
     * Simply selects the home view to render by returning its name.
     */
    @RequestMapping(value = "/", method = {RequestMethod.GET, RequestMethod.POST})
    public String home(Locale locale, Model model, HttpServletRequest req) {
        logger.info("Welcome home! The client locale is {}.", locale);

        Date date = new Date();
        DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG,
                DateFormat.LONG, locale);

        String formattedDate = dateFormat.format(date);

        model.addAttribute("serverTime", formattedDate);
        
        req.getServerPort();
        
        model.addAttribute("server_port", req.getServerPort());

        return "welcome/home";
    }
    
    @RequestMapping(value = "/list", method = {RequestMethod.GET, RequestMethod.POST})
    public String userList(Locale locale, Model model) {
        logger.info("userlist invoked.................");

        return "user/list";
    }
    
    @RequestMapping(value = "/dir2", method = {RequestMethod.GET, RequestMethod.POST})
    public String dirTwo(Locale locale, Model model) {
        logger.info("directive 2 invoked.................");

        return "directv/dir2";
    }
    
    @RequestMapping(value = "/pubData", method = {RequestMethod.GET, RequestMethod.POST})
    public String publisherPage(Locale locale, Model model) {
        logger.info("publisher page .................");

        return "data/publisher";
    }
    
    @RequestMapping(value = "/listenerData", method = {RequestMethod.GET, RequestMethod.POST})
    public String listenerPage(Locale locale, Model model) {
        logger.info("publisher page .................");

        return "data/listener";
    }

}
