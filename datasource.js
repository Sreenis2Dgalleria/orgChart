export var data = [
    { 'id': 'parent', 'role': 'Board', 'color': '#71AF17' },
    { 'id': '1', 'role': 'General Manager', 'manager': 'parent', 'color': '#71AF17' },
    { 'id': '2', 'role': 'Human Resource Manager', 'manager': '1', 'color': '#1859B7' },
    { 'id': '3', 'role': 'Trainers', 'manager': '2', 'color': '#2E95D8' },
    { 'id': '4', 'role': 'Recruiting Team', 'manager': '2', 'color': '#2E95D8' }, 
    { 'id': '6', 'role': 'Design Manager', 'manager': '1', 'color': '#1859B7' },
    { 'id': '7', 'role': 'Design Supervisor', 'manager': '6', 'color': '#2E95D8' },
    { 'id': '8', 'role': 'Development Supervisor', 'manager': '6', 'color': '#2E95D8' },
    { 'id': '10', 'role': 'Operations Manager', 'manager': '1', 'color': '#1859B7' },
    { 'id': '11', 'role': 'Statistics Department', 'manager': '10', 'color': '#2E95D8' },
    { 'id': '12', 'role': 'Logistics Department', 'manager': '10', 'color': '#2E95D8' },
    { 'id': '16', 'role': 'Marketing Manager', 'manager': '1', 'color': '#1859B7' },
    { 'id': '17', 'role': 'Overseas Sales Manager', 'manager': '16', 'color': '#2E95D8' }, 
    { 'id': '20', 'role': 'Service Department Manager', 'manager': '16', 'color': '#2E95D8' }
];