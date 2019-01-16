package com.angular.app.welcome;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class Sample {
	public static void main(String[] args) {
		Parent p = new Child();
		
		p.show();
		
		Student s1 = new Student();
		s1.setsName("xyz");
		s1.setsNo(2);
		
		Student s2 = new Student();
		s2.setsName("ghi");
		s2.setsNo(3);
		
		Student s3 = new Student();
		s3.setsName("mno");
		s3.setsNo(12);
		
		Student s4 = new Student();
		s4.setsName("abc");
		s4.setsNo(44);
		
		List<Student> plainList = new ArrayList<Student>();
		
		plainList.add(s1);
		plainList.add(s2);
		plainList.add(s3);
		plainList.add(s4);
		System.out.println("-----UnOrdered List---------------");
		for (Student student : plainList) {
			
			System.out.println(student.getsNo() +"\t"+student.getsName());
		}
		System.out.println("---------------------------------");
		
		Collections.sort(plainList);
		System.out.println("-----Ordered List by sname reverese---------------");
		for (Student student : plainList) {
			
			System.out.println(student.getsNo() +"\t"+student.getsName());
		}
		System.out.println("---------------------------------");
		
		Collections.sort(plainList, new MyComparator());
		
		System.out.println("-----Ordered List by sname asc---------------");
		for (Student student : plainList) {
			
			System.out.println(student.getsNo() +"\t"+student.getsName());
		}
		System.out.println("---------------------------------");
		
		
	}

}
