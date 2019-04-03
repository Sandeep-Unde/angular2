package com.angular.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.angular.domain.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Override
	public List<Employee> getEmployeeList() {
		List<Employee> list = new ArrayList<Employee>();
		
		for (int i = 1; i < 100; i++) {
			Employee emp = new Employee();
			emp.setEmpAddress("Address-"+i);
			emp.setEmpName("Name-"+i);
			emp.setEmpNo(i);
			list.add(emp);
		}
		
		return list;
	}

}
