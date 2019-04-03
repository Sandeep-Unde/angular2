package com.angular.domain.model;

public class Employee {
	/**
	 * <td>{{emp.empNo}}</td>
		<td>{{emp.empName}}</td>
		<td>{{emp.empAddress}}</td>
	 */
	
	private Integer empNo;
	
	private String empName;
	
	private String empAddress;

	public Integer getEmpNo() {
		return empNo;
	}

	public void setEmpNo(Integer empNo) {
		this.empNo = empNo;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpAddress() {
		return empAddress;
	}

	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}
	
	

}
