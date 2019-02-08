package com.angular.app.welcome;

public class Student implements Comparable<Student>{
	
	private String sName;
	
	private Integer sNo;

	public String getsName() {
		return sName;
	}

	public void setsName(String sName) {
		this.sName = sName;
	}

	public Integer getsNo() {
		return sNo;
	}

	public void setsNo(Integer sNo) {
		this.sNo = sNo;
	}

	@Override
	public int compareTo(Student o) {
		// TODO Auto-generated method stub
		return - this.sName.compareTo(o.getsName());
	}
	
	

}
