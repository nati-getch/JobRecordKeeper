package com.job.service;

import java.time.LocalDate;
import java.util.List;

import com.job.modal.Employer;
import com.job.modal.Job;
import com.job.modal.User;

public interface JobService {
	
	public Job recordJob(Job job);
	public List<Job> getallJobs();
	public List<Job> getJobByRecruiter(Employer recruiter);
	public List<Job> getJobByDirectHire(Employer directHire);
	public List<Job> getJobByRegisteredDate(LocalDate registeredDate);
	public List<Job> getJobByDateApplied(LocalDate dateApplied);
	public Job getJobById(String id);
	public void disableJob(String id);
	public void enableJob(String id);
	public void deleteJobById(String id);
	public List<Job>getJobByUser(User user);

}
