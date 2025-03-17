class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        ThisList = nums
        ThisList.extend(nums)
        print(ThisList)
        return ThisList
        