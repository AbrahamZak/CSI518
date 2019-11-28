package sampleQueue;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.NoSuchElementException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;


class QueueTest {

	/**
	 * Tests for Queue.
	 */

	private static final String SOME_ITEM = "some-content";
	private Queue<String> q;


	@Test
	@DisplayName("is instantiated with new Queue()")
	void isInstantiatedWithNew() {
		new Queue<>();
	}

	@Test
	@DisplayName("Instantiate new queue with specified length")
	void newMaxLength(){
		new Queue<>(10000);
	}
	
	@Nested
	@DisplayName("New Queue Tests")
	class New{
		
		@BeforeEach
		void createQueue() {
			q = new Queue<>();
		}
		
		@Test
		@DisplayName("Check if empty")
		void empty() {
			assertTrue(q.isEmpty());
		}
		
		@Test
		@DisplayName("Check if length is reporting as 0")
		void length() {
			assertEquals(0, q.length());
		}
		
		@Test
		@DisplayName("Can't remove all when queue is empty, nothing happens")
		void removeEmpty() {
			q.removeAll();
		}
			
		@Test
		@DisplayName("Doesn't allow empty queue to be peeked")
		void peekEmpty() {
			assertThrows(NoSuchElementException.class, q::peek);
		}
		
		@Test
		@DisplayName("Doesn't allow empty queue to be dequeued")
		void dequeueEmpty() {
			assertThrows(NoSuchElementException.class, q::dequeue);
		}
		
		@Nested
		@DisplayName("Tests after enqueing")
		class AddToQueue{
			String add = "new node";
			
			@BeforeEach
			void enqueue() {
				q.enqueue(add);
			}
			
			@Test
			@DisplayName("Check if it reports false to isEmpty")
			void checkEmptyWhenNot() {
				assertFalse(q.isEmpty());
			}
			
			@Test
			@DisplayName("Check if it reports a length now")
			void checkLengthNotZero() {
				assertFalse(q.length() == 0);
			}
			
			@Test
			@DisplayName("Get our element returned when dequeued, and empty is now true, and if length becomes 0")
			void DequeueTest() {
				assertEquals(add, q.dequeue());
				assertTrue(q.isEmpty());
				assertTrue(q.length() == 0);
			}
			
			@Test
			@DisplayName("Get element when peeked but empty remains false, and if length stays over 0")
			void PeekTest() {
				assertEquals(add, q.peek());
				assertFalse(q.isEmpty());
				assertFalse(q.length() == 0);
			}
			
			@Test
			@DisplayName("Remove all elements, check length is 0 and isEmpty is true")
			void removeAllShouldRemoveAllElements() {
				q.removeAll();
				assertTrue(q.isEmpty());
				assertTrue(q.length() == 0);
			}
		}
	}
	
	@Nested
	@DisplayName("Tests with a full queue")
	class fullQueue{
		String add = "new node";
		int max = 3;
	
	@BeforeEach
	void newFullQueue() {
		q = new Queue<String>(max);
		for (int i = 0; i<max; i++) {
		q.enqueue("new node");
		}
	}
	
		@Test
		@DisplayName("Check if empty")
		void a() {
			assertFalse(q.isEmpty());
		}
		
		@Test
		@DisplayName("Check if it reports a length now")
		void checkLengthNotZero() {
			assertFalse(q.length() == 0);
		}
		
		@Test
		@DisplayName("Enqueue should not work")
		void enqueueFull() {
			assertThrows(RuntimeException.class, () -> { q.enqueue("new node"); });
		}
		
		@Test
		@DisplayName("Get element when peeked but empty remains false, and if length stays over 0")
		void PeekTest() {
			assertEquals(add, q.peek());
			assertFalse(q.isEmpty());
			assertFalse(q.length() == 0);
		}
		
		@Test
		@DisplayName("Remove all elements, check length is 0 and isEmpty is true")
		void removeAllShouldRemoveAllElements() {
			q.removeAll();
			assertTrue(q.isEmpty());
			assertTrue(q.length() == 0);
		}
		
	}
	
	@Test
	@DisplayName("Enqueue multiple elements")
	void enqueueMult() {
		q.enqueue("new");
		q.enqueue("new");
		q.enqueue("new");
	}
	
	@Test
	@DisplayName("Dequeue multiple elements")
	void dequeueMult() {
		q.enqueue("new");
		q.enqueue("new");
		q.enqueue("new");
		q.dequeue();
		q.dequeue();
	}
	
	@Test
	@BeforeEach
	void init() {
		this.q = new Queue<String>();
	}

	@DisplayName("Verify Queue isEmpty when queue is initialized")
	void isEmptyShouldGiveTrueOnQueueInit() {
		assertTrue(q.isEmpty());
	}

	

	
	//Example of a test that passes when some function returns false.
	@Test
	@Disabled
	@DisplayName("Verify Queue isEmpty returns false when queue is not empty")
	void isEmptyShouldGiveFalseWhenQueueIsNotEmpty() {
		this.q.enqueue(SOME_ITEM);
		assertFalse(q.isEmpty());
	}

	@Test
	@DisplayName("Creates ")
	void constructor() {
		assertTrue(q.isEmpty());
	}
	
	
	
}