package com.angular.app.welcome;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.angular.domain.service.EmployeeService;

@Controller
public class EmpController {

	@Autowired
	EmployeeService employeeService;

	@RequestMapping(value = "/empHome", method = RequestMethod.GET)
	public String launchEmpHome(Model model) {

		return "emp/emplist";
	}

}
